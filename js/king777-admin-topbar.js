(function () {
  "use strict";
  var isAdminPath = function () {
    var p = (location.pathname || "").toLowerCase();
    return /^\/admin(\/|$)/.test(p) && !/^\/admin\/login/.test(p);
  };
  var token = function () {
    return localStorage.getItem("token-admin") || sessionStorage.getItem("token-admin") || localStorage.getItem("token") || "";
  };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  var bar = null;
  var state = { items: [], unread: 0, username: localStorage.getItem("current-username") || "" };

  // Styles for the top bar live in /css/king777-glass.css.
  function injectStyle() {}

  function build() {
    bar = el("div");
    bar.id = "k7-topbar";
    var bell = el("button", "k7-btn k7-bell", '<span aria-hidden="true">&#128276;</span><span class="k7-count" id="k7-count">0</span>');
    bell.type = "button";
    bell.setAttribute("aria-label", "Notifications");
    var notes = el("div", "k7-menu k7-notes");
    notes.id = "k7-notes";
    var user = el("button", "k7-btn", '<span id="k7-name"></span><span aria-hidden="true">&#9662;</span>');
    user.type = "button";
    var menu = el("div", "k7-menu");
    menu.id = "k7-usermenu";
    var cp = el("a", "", "Change Password");
    cp.href = "/admin/change-password";
    var lo = el("button", "", "Logout");
    lo.type = "button";
    menu.appendChild(cp);
    menu.appendChild(lo);
    bar.appendChild(bell);
    bar.appendChild(user);
    bar.appendChild(notes);
    bar.appendChild(menu);

    bell.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.remove("open");
      notes.classList.toggle("open");
    });
    user.addEventListener("click", function (e) {
      e.stopPropagation();
      notes.classList.remove("open");
      menu.classList.toggle("open");
    });
    notes.addEventListener("click", function (e) {
      e.stopPropagation();
      if (e.target.closest("[data-read-all]")) markRead("");
    });
    lo.addEventListener("click", logout);
    document.addEventListener("click", function () {
      notes.classList.remove("open");
      menu.classList.remove("open");
    });
    return bar;
  }

  function place() {
    var inline = document.querySelector("header.topbar");
    if (inline) {
      var right = inline.lastElementChild;
      if (right && right.tagName !== "DIV" && !right.id) right.remove();
      bar.classList.add("k7-inline");
      inline.appendChild(bar);
    } else {
      bar.classList.remove("k7-inline");
      document.body.appendChild(bar);
    }
  }

  function render() {
    var count = document.getElementById("k7-count");
    count.textContent = state.unread > 99 ? "99+" : String(state.unread);
    count.style.display = state.unread ? "" : "none";
    document.getElementById("k7-name").textContent = state.username || "Account";
    var notes = document.getElementById("k7-notes");
    var list = state.items.length
      ? state.items
          .map(function (n) {
            return (
              '<div class="k7-note' + (n.isRead ? "" : " unread") + '"><b>' + esc(n.title) + "</b>" +
              (n.message ? "<span>" + esc(n.message) + "</span>" : "") +
              "<small>" + esc(new Date(n.createdAt).toLocaleString()) + "</small></div>"
            );
          })
          .join("")
      : '<div class="k7-note">No notifications</div>';
    notes.innerHTML = '<div class="k7-head"><span>Notifications</span><button type="button" data-read-all>Mark all read</button></div>' + list;
  }

  function api(url, options) {
    options = options || {};
    options.headers = Object.assign({ Authorization: "Bearer " + token() }, options.headers || {});
    return fetch(url, options).then(function (r) {
      if (r.status === 401) throw new Error("401");
      return r.json();
    });
  }

  function refresh() {
    if (!token()) return;
    api("/api/admin/notifications")
      .then(function (json) {
        var d = json.data || json;
        state.items = d.items || [];
        state.unread = d.unreadCount || 0;
        if (d.user && d.user.username) {
          state.username = d.user.username;
          localStorage.setItem("current-username", d.user.username);
        }
        render();
      })
      .catch(function () {});
  }

  function markRead(id) {
    api("/api/admin/notifications/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id ? { id: id } : {}),
    }).then(refresh).catch(function () {});
  }

  function logout() {
    ["token-admin", "refreshToken-admin", "userType-admin", "token", "refreshToken", "login-session", "current-username"].forEach(function (k) {
      localStorage.removeItem(k);
      sessionStorage.removeItem(k);
    });
    location.replace("/admin/login");
  }

  var loaded = false;
  // Pages embedded in the main admin panel already sit under its header.
  var embedded = window.top !== window.self;
  function sync() {
    if (embedded) return;
    if (/^\/admin\/?$/i.test(location.pathname || "")) {
      location.replace("/admin/dashboard");
      return;
    }
    var show = isAdminPath() && !!token();
    if (!show) {
      if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
      loaded = false;
      return;
    }
    if (!document.body) return;
    injectStyle();
    if (!bar) build();
    if (!bar.parentNode) place();
    if (!loaded) {
      loaded = true;
      render();
      refresh();
    }
  }

  setInterval(sync, 800);
  setInterval(function () {
    if (bar && bar.parentNode) refresh();
  }, 60000);
  document.addEventListener("DOMContentLoaded", sync);
})();
