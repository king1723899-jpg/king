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

  function injectStyle() {
    if (document.getElementById("k7-topbar-style")) return;
    var css =
      "#k7-topbar{position:fixed;top:0;right:0;z-index:1500;height:52px;display:flex;align-items:center;gap:10px;padding:0 12px;background:rgba(5,5,6,.92);border-bottom-left-radius:10px;color:#fff;font:600 14px Arial,sans-serif}" +
      "#k7-topbar.k7-inline{position:static;height:auto;background:transparent;padding:0;border-radius:0}" +
      "#k7-topbar .k7-btn{background:transparent;border:0;color:#fff;cursor:pointer;display:flex;align-items:center;gap:6px;padding:6px 8px;font:inherit}" +
      "#k7-topbar .k7-bell{position:relative;background:#ffc107;color:#111;border-radius:6px;width:38px;height:34px;justify-content:center;padding:0}" +
      "#k7-topbar .k7-count{position:absolute;top:-6px;right:-6px;background:#e11d48;color:#fff;border-radius:10px;min-width:18px;height:18px;font-size:11px;line-height:18px;text-align:center;padding:0 4px}" +
      "#k7-topbar .k7-menu{position:absolute;top:50px;right:8px;min-width:200px;max-width:92vw;background:#fff;color:#111;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);display:none;overflow:hidden}" +
      "#k7-topbar .k7-menu.open{display:block}" +
      "#k7-topbar .k7-menu a,#k7-topbar .k7-menu button{display:block;width:100%;text-align:left;padding:11px 14px;color:#111;background:#fff;border:0;border-bottom:1px solid #eee;text-decoration:none;font:600 14px Arial,sans-serif;cursor:pointer}" +
      "#k7-topbar .k7-menu a:hover,#k7-topbar .k7-menu button:hover{background:#f3f4f6}" +
      "#k7-topbar .k7-notes{width:320px;max-height:60vh;overflow-y:auto}" +
      "#k7-topbar .k7-note{padding:10px 14px;border-bottom:1px solid #eee;font-weight:400}" +
      "#k7-topbar .k7-note.unread{background:#fff8e1}" +
      "#k7-topbar .k7-note b{display:block}#k7-topbar .k7-note small{color:#6b7280}" +
      "#k7-topbar .k7-head{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid #ddd;font-weight:700}" +
      "#k7-topbar .k7-head button{width:auto;padding:0;border:0;color:#2563eb;font-size:12px}" +
      "body.k7-has-topbar{padding-top:0}";
    var s = el("style");
    s.id = "k7-topbar-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

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
