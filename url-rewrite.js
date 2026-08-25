(function () {
  if (window.__casinoLaunchLoaderBootstrapped) return;
  window.__casinoLaunchLoaderBootstrapped = true;

  var trackedUrlPattern = /(GetGameUrl\.php|get-cas-casino-play-url)/i;
  var activeRequests = 0;
  var overlayEl = null;
  var hideTimer = null;
  var failSafeTimer = null;
  var showDelayTimer = null;
  var loaderVisible = false;
  var styleInjected = false;

  function injectStyles() {
    if (styleInjected) return;
    styleInjected = true;

    var style = document.createElement("style");
    style.id = "casino-launch-loader-style";
    style.textContent =
      "@keyframes casinoLoaderSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}" +
      ".casino-launch-loader-overlay{position:fixed;inset:0;background:rgba(5,10,24,.72);backdrop-filter:blur(2px);display:none;align-items:center;justify-content:center;z-index:2147483647;padding:20px;pointer-events:auto}" +
      ".casino-launch-loader-card{min-width:240px;max-width:92vw;border-radius:14px;background:linear-gradient(135deg,#0b1f3f 0%,#11345f 100%);color:#fff;box-shadow:0 20px 60px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.16);padding:18px 20px;text-align:center;font-family:Arial,sans-serif}" +
      ".casino-launch-loader-spinner{width:2.4rem;height:2.4rem;border:3px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:50%;margin:0 auto;animation:casinoLoaderSpin .8s linear infinite}" +
      ".casino-launch-loader-title{margin-top:12px;font-weight:700;letter-spacing:.2px}" +
      ".casino-launch-loader-sub{margin-top:6px;font-size:12px;opacity:.85}";

    document.head.appendChild(style);
  }

  function ensureOverlay() {
    if (overlayEl && overlayEl.isConnected) return overlayEl;
    injectStyles();

    overlayEl = document.createElement("div");
    overlayEl.className = "casino-launch-loader-overlay";
    overlayEl.setAttribute("aria-live", "polite");
    overlayEl.innerHTML =
      '<div class="casino-launch-loader-card">' +
      '<div class="casino-launch-loader-spinner"></div>' +
      '<div class="casino-launch-loader-title">Launching game...</div>' +
      '<div class="casino-launch-loader-sub">Please wait</div>' +
      "</div>";

    document.body.appendChild(overlayEl);
    return overlayEl;
  }

  function showLoader() {
    activeRequests = Math.min(50, activeRequests + 1);
    ensureOverlay();

    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (loaderVisible) return;
    if (showDelayTimer) return;
    showDelayTimer = setTimeout(function () {
      showDelayTimer = null;
      if (activeRequests <= 0) return;
      var el = ensureOverlay();
      el.style.display = "flex";
      loaderVisible = true;
      if (failSafeTimer) {
        clearTimeout(failSafeTimer);
      }
      failSafeTimer = setTimeout(forceHideLoader, 12000);
    }, 180);
  }

  function hideLoader() {
    activeRequests = Math.max(0, activeRequests - 1);
    if (activeRequests > 0) return;

    if (showDelayTimer) {
      clearTimeout(showDelayTimer);
      showDelayTimer = null;
    }
    if (failSafeTimer) {
      clearTimeout(failSafeTimer);
      failSafeTimer = null;
    }
    if (hideTimer) {
      clearTimeout(hideTimer);
    }

    hideTimer = setTimeout(function () {
      if (overlayEl) {
        overlayEl.style.display = "none";
      }
      loaderVisible = false;
    }, 60);
  }

  function forceHideLoader() {
    activeRequests = 0;

    if (showDelayTimer) {
      clearTimeout(showDelayTimer);
      showDelayTimer = null;
    }
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (failSafeTimer) {
      clearTimeout(failSafeTimer);
      failSafeTimer = null;
    }
    if (overlayEl) {
      overlayEl.style.display = "none";
    }
    loaderVisible = false;
  }

  window.__forceHideCasinoLaunchLoader = forceHideLoader;
  window.__showCasinoLaunchLoader = showLoader;

  function shouldTrack(url) {
    return trackedUrlPattern.test(String(url || ""));
  }

  var nativeFetch = window.fetch;
  if (typeof nativeFetch === "function") {
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : input && input.url;
      var tracked = shouldTrack(url);
      if (tracked) showLoader();
      var result;
      try {
        result = nativeFetch.apply(this, arguments);
      } catch (err) {
        if (tracked) hideLoader();
        throw err;
      }
      if (!tracked) return result;
      if (result && typeof result.finally === "function") {
        return result.finally(hideLoader);
      }
      if (result && typeof result.then === "function") {
        return result.then(
          function (value) {
            hideLoader();
            return value;
          },
          function (error) {
            hideLoader();
            throw error;
          }
        );
      }
      hideLoader();
      return result;
    };
  }

  if (window.XMLHttpRequest && window.XMLHttpRequest.prototype.open) {
    var nativeOpen = XMLHttpRequest.prototype.open;
    var nativeSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
      this.__isCasinoLaunchRequest = shouldTrack(url);
      return nativeOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      if (this.__isCasinoLaunchRequest) {
        showLoader();
        this.addEventListener("loadend", hideLoader, { once: true });
      }
      return nativeSend.apply(this, arguments);
    };
  }

  function textLooksUnavailable(text) {
    var t = String(text || "").toLowerCase();
    if (!t) return false;
    return (
      t.indexOf("this game is currently not available") >= 0 ||
      t.indexOf("this is not currently available") >= 0 ||
      t.indexOf("not available currently") >= 0
    );
  }

  if (window.MutationObserver && document.documentElement) {
    var observer = new MutationObserver(function (mutationList) {
      if (!loaderVisible) return;
      for (var i = 0; i < mutationList.length; i++) {
        var record = mutationList[i];
        if (!record || !record.addedNodes) continue;
        for (var j = 0; j < record.addedNodes.length; j++) {
          var node = record.addedNodes[j];
          if (!node || node.nodeType !== 1) continue;
          var text = "";
          try {
            text = node.textContent || "";
          } catch (_err) {
            text = "";
          }
          if (textLooksUnavailable(text)) {
            forceHideLoader();
            return;
          }
        }
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  window.addEventListener("error", function () {
    forceHideLoader();
  });
  window.addEventListener("unhandledrejection", function () {
    forceHideLoader();
  });
  window.addEventListener("beforeunload", forceHideLoader);
  window.addEventListener("pagehide", forceHideLoader);
  window.addEventListener("popstate", forceHideLoader);
})();
