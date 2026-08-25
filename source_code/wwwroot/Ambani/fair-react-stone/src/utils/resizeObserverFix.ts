

// Utility to fix ResizeObserver loop errors
export const fixResizeObserverError = () => {
  // Complete suppression of ResizeObserver errors
  const debounceResizeHandler = (callback: Function, wait: number) => {
    let timeout: any;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        callback(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Override console.error completely for ResizeObserver
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0];
    if (typeof message === 'string' && 
        (message.includes('ResizeObserver') || 
         message.includes('loop completed with undelivered notifications'))) {
      return; // Completely ignore ResizeObserver errors
    }
    originalConsoleError.apply(console, args);
  };

  // Override window.onerror to suppress all ResizeObserver errors
  const originalWindowError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    const msg = String(message);
    if (msg.includes('ResizeObserver') || 
        msg.includes('loop completed with undelivered notifications')) {
      return true; // Suppress the error completely
    }
    return originalWindowError ? originalWindowError(message, source, lineno, colno, error) : false;
  };

  // Suppress unhandled promise rejections related to ResizeObserver
  const originalUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = (event) => {
    const reason = String(event.reason);
    if (reason.includes('ResizeObserver') || 
        reason.includes('loop completed with undelivered notifications')) {
      event.preventDefault();
      return;
    }
    if (originalUnhandledRejection) {
      originalUnhandledRejection.call(window, event);
    }
  };

  // Patch ResizeObserver to prevent the error at its source
  const OriginalResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class PatchedResizeObserver extends OriginalResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      const debouncedCallback = debounceResizeHandler(callback, 16); // 60fps debounce
      super(debouncedCallback);
    }
  };

  // Return cleanup function
  return () => {
    console.error = originalConsoleError;
    window.onerror = originalWindowError;
    window.onunhandledrejection = originalUnhandledRejection;
    window.ResizeObserver = OriginalResizeObserver;
  };
};

// Debounced resize handler to prevent rapid ResizeObserver calls
export const createDebouncedResizeHandler = (callback: () => void, delay: number = 100) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};
