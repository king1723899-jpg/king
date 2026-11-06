(function () {
  function isStandaloneAddUserPath(value) {
    try {
      var pathname = new URL(String(value || ""), window.location.origin).pathname.replace(/\/+$/, "") || "/";
      return pathname === "/admin/add-user" || pathname === "/admin/client-onboarding" || pathname === "/add-user";
    } catch (_) {
      return false;
    }
  }

  function standaloneAddUserUrl(value) {
    try {
      var parsed = new URL(String(value || ""), window.location.origin);
      return "/admin/add-user" + parsed.search + parsed.hash;
    } catch (_) {
      return "/admin/add-user";
    }
  }

  var nativePushState = window.history && window.history.pushState;
  var nativeReplaceState = window.history && window.history.replaceState;
  if (nativePushState) {
    window.history.pushState = function (state, title, url) {
      if (isStandaloneAddUserPath(url)) {
        window.location.assign(standaloneAddUserUrl(url));
        return;
      }
      return nativePushState.apply(this, arguments);
    };
  }
  if (nativeReplaceState) {
    window.history.replaceState = function (state, title, url) {
      if (isStandaloneAddUserPath(url)) {
        window.location.assign(standaloneAddUserUrl(url));
        return;
      }
      return nativeReplaceState.apply(this, arguments);
    };
  }

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!link || !isStandaloneAddUserPath(link.href)) return;
    event.preventDefault();
    window.location.assign(standaloneAddUserUrl(link.href));
  }, true);

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

    // Loader styles live in /css/king777-glass.css.
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
