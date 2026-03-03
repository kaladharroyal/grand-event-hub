// ══════════════════════════════════════════════
// Eventique — Single-Page App (plain JS)
// ══════════════════════════════════════════════

// ── SVG Icons (inline, replacing lucide-react) ──
const Icons = {
    sparkles: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>`,
    bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    bellOff: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"/><path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="m2 2 20 20"/></svg>`,
    logOut: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    clock: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    mapPin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    users: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    arrowLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    share2: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    userCheck: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    layoutList: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/></svg>`,
    calendarDays: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>`,
    ticket: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>`,
    partyPopper: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.63-.69 1.22-1.3 1.22h-.18c-.75 0-1.42.49-1.63 1.2L16 17.5"/><path d="m6.5 12.5 7 7"/></svg>`,
    check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    checkCheck: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`,
    x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevronRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
};

// ── Helpers ──
const $ = (sel) => document.querySelector(sel);
const app = () => $("#app");

function navigate(hash) {
    window.location.hash = hash;
}

function showToast(title, message) {
    const existing = $(".toast");
    if (existing) existing.remove();
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<div class="toast-title">${title}</div><div class="toast-msg">${message}</div>`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

function formatDate(dateStr, options) {
    return new Date(dateStr).toLocaleDateString("en-US", options || { weekday: "short", month: "short", day: "numeric" });
}

function formatFullDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

// ── Header Component ──
function renderHeader() {
    const user = Auth.getUser();
    const unread = Notifs.getUnreadCount();
    return `
    <header class="site-header glass">
      <div class="header-inner">
        <div>
          <h2 class="logo-text text-gradient-gold" style="cursor:pointer" onclick="navigate('#/dashboard')">Eventique</h2>
        </div>
        <div class="header-actions">
          <div style="position:relative">
            <button class="notif-btn" id="notif-toggle">
              ${Icons.bell}
              ${unread > 0 ? `<span class="notif-badge">${unread > 99 ? '99+' : unread}</span>` : ''}
            </button>
            <div id="notif-panel-container"></div>
          </div>
          <div class="user-pill glass-hover">
            <span style="color:hsl(var(--secondary))">${Icons.user}</span>
            <span class="user-name">${user ? user.name : ''}</span>
          </div>
          <button class="logout-btn" title="Logout" id="logout-btn">
            ${Icons.logOut}
          </button>
        </div>
      </div>
    </header>
  `;
}

// ── Notification Panel ──
function renderNotificationPanel() {
    const notifs = Notifs.getAll();
    const unread = Notifs.getUnreadCount();

    let items = '';
    if (notifs.length === 0) {
        items = `<div class="notif-empty">${Icons.bellOff}<p style="font-size:0.875rem">No notifications yet</p></div>`;
    } else {
        items = notifs.map(n => `
      <div class="notif-item ${n.read ? 'read' : 'unread'}" data-notif-id="${n.id}" data-event-id="${n.eventId}">
        <span class="notif-icon">${n.icon}</span>
        <div class="notif-content">
          <p class="notif-title">${n.title}</p>
          <p class="notif-message">${n.message}</p>
          <p class="notif-time">${getTimeAgo(n.timestamp)}</p>
        </div>
        ${!n.read ? `<button class="notif-mark-btn" data-mark-id="${n.id}" title="Mark as read"><span style="color:hsl(var(--secondary))">${Icons.check}</span></button>` : ''}
      </div>
    `).join('');
    }

    return `
    <div class="notif-panel glass animate-slideDown" id="notif-panel">
      <div class="notif-header">
        <h3>Notifications</h3>
        <div class="notif-actions">
          ${unread > 0 ? `<button class="mark-all-btn" id="mark-all-read">${Icons.checkCheck} Mark all read</button>` : ''}
          <button class="btn-ghost" id="close-notifs">${Icons.x}</button>
        </div>
      </div>
      <div class="notif-list">${items}</div>
    </div>
  `;
}

// ── Event Card ──
function renderEventCard(event) {
    const isNew = isNewEvent(event.createdAt);
    const soon = isEventSoon(event.date);
    const spotsLeft = event.maxAttendees - event.currentRegistrations;
    const almostFull = spotsLeft < event.maxAttendees * 0.1;

    let badges = '';
    if (isNew) badges += `<span class="badge badge-secondary">${Icons.sparkles.replace(/width="\d+"/g, 'width="12"').replace(/height="\d+"/g, 'height="12"')} New</span>`;
    if (soon) badges += `<span class="badge badge-destructive">${Icons.clock} ${soon === 'today' ? 'Today' : 'Tomorrow'}</span>`;

    const tags = event.subEvents.slice(0, 3).map(s => `<span class="sub-tag">${s}</span>`).join('');
    const extra = event.subEvents.length > 3 ? `<span class="sub-tag sub-tag-muted">+${event.subEvents.length - 3} more</span>` : '';

    return `
    <div class="event-card glass-hover" onclick="navigate('#/event/${event.id}')">
      <div class="card-top">
        <h3 class="card-title">${event.name}</h3>
        <div class="card-badges">${badges}</div>
      </div>
      <div class="card-meta">
        <div class="card-meta-row">${Icons.calendar}<span>${formatDate(event.date)} · ${event.time}</span></div>
        <div class="card-meta-row">${Icons.mapPin}<span>${event.venue}</span></div>
        <div class="card-meta-row">${Icons.users}<span>${event.currentRegistrations}/${event.maxAttendees} registered</span>${almostFull ? '<span class="almost-full">Almost full!</span>' : ''}</div>
      </div>
      <p class="card-desc">${event.description}</p>
      <div class="card-tags">${tags}${extra}</div>
    </div>
  `;
}

// ── Calendar View ──
function renderCalendarView(events, currentDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    const eventsByDate = {};
    events.forEach(e => {
        if (!eventsByDate[e.date]) eventsByDate[e.date] = [];
        eventsByDate[e.date].push(e);
    });

    const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let headers = dayLabels.map(d => `<div class="calendar-day-label">${d}</div>`).join('');

    let cells = '';
    for (let i = 0; i < firstDay; i++) cells += '<div></div>';
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dayEvents = eventsByDate[dateStr] || [];
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
        const evHtml = dayEvents.map(ev => `<div class="cal-event" onclick="event.stopPropagation();navigate('#/event/${ev.id}')">${ev.name}</div>`).join('');
        cells += `
      <div class="calendar-cell ${isToday ? 'today' : ''}" ${dayEvents.length === 1 ? `onclick="navigate('#/event/${dayEvents[0].id}')" style="cursor:pointer"` : ''}>
        <span class="day-number">${d}</span>
        ${evHtml}
      </div>
    `;
    }

    return `
    <div class="calendar-container glass animate-fadeIn">
      <div class="calendar-nav">
        <button id="cal-prev">${Icons.chevronLeft}</button>
        <h3>${monthName}</h3>
        <button id="cal-next">${Icons.chevronRight}</button>
      </div>
      <div class="calendar-grid">${headers}</div>
      <div class="calendar-grid">${cells}</div>
    </div>
  `;
}

// ═══════════ PAGE RENDERERS ═══════════

// ── Login Page ──
function renderLogin() {
    app().innerHTML = `
    <div class="gradient-bg auth-page">
      <div class="auth-wrapper animate-fadeInUp">
        <div class="auth-brand">
          <div class="brand-row animate-scaleIn">
            <span style="color:hsl(var(--secondary))">${Icons.sparkles}</span>
            <h1 class="text-gradient-gold">Eventique</h1>
          </div>
          <p>Your gateway to extraordinary campus experiences</p>
        </div>
        <div class="auth-card glass">
          <h2>Welcome Back</h2>
          <form id="login-form">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="login-email" class="form-input" placeholder="your@college.edu" />
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <div class="password-wrapper">
                <input type="password" id="login-password" class="form-input" placeholder="••••••••" style="padding-right:2.5rem" />
                <button type="button" class="password-toggle" id="toggle-login-pw">${Icons.eye}</button>
              </div>
            </div>
            <div id="login-error" class="auth-error" style="display:none"></div>
            <button type="submit" class="btn btn-primary btn-full">Sign In</button>
          </form>
          <div class="auth-footer">
            <p>First time here? <a href="#/register">Create an account</a></p>
          </div>
        </div>
      </div>
    </div>
  `;
    bindLogin();
}

function bindLogin() {
    const form = $("#login-form");
    const pwToggle = $("#toggle-login-pw");
    const pwInput = $("#login-password");

    pwToggle.addEventListener("click", () => {
        const isPassword = pwInput.type === "password";
        pwInput.type = isPassword ? "text" : "password";
        pwToggle.innerHTML = isPassword ? Icons.eyeOff : Icons.eye;
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#login-email").value.trim();
        const password = pwInput.value;
        const errEl = $("#login-error");

        if (!email || !password) {
            errEl.textContent = "Please fill in all fields";
            errEl.style.display = "block";
            return;
        }
        if (Auth.login(email, password)) {
            const user = Auth.getUser();
            Notifs.load(user.id);
            navigate("#/dashboard");
        } else {
            errEl.textContent = "Invalid credentials. New here? Register first!";
            errEl.style.display = "block";
        }
    });
}

// ── Register Page ──
function renderRegister() {
    app().innerHTML = `
    <div class="gradient-bg auth-page" style="padding-top:2rem;padding-bottom:2rem">
      <div class="auth-wrapper animate-fadeInUp">
        <div class="auth-brand">
          <div class="brand-row animate-scaleIn">
            <span style="color:hsl(var(--secondary))">${Icons.sparkles}</span>
            <h1 class="text-gradient-gold">Eventique</h1>
          </div>
          <p>Join the most vibrant campus community</p>
        </div>
        <div class="auth-card glass">
          <h2>Create Account</h2>
          <form id="register-form">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="reg-name" class="form-input" placeholder="Your full name" />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="reg-email" class="form-input" placeholder="your@college.edu" />
            </div>
            <div class="form-row">
              <div>
                <label class="form-label">Department</label>
                <select id="reg-dept" class="form-select">
                  <option value="">Select</option>
                  <option>Computer Science</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                  <option>Business</option>
                  <option>Arts</option>
                </select>
              </div>
              <div>
                <label class="form-label">Year</label>
                <select id="reg-year" class="form-select">
                  <option value="">Select</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <div class="password-wrapper">
                <input type="password" id="reg-password" class="form-input" placeholder="Min 6 characters" style="padding-right:2.5rem" />
                <button type="button" class="password-toggle" id="toggle-reg-pw">${Icons.eye}</button>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Confirm Password</label>
              <input type="password" id="reg-confirm" class="form-input" placeholder="••••••••" />
            </div>
            <div id="reg-error" class="auth-error" style="display:none"></div>
            <button type="submit" class="btn btn-primary btn-full">Create Account</button>
          </form>
          <div class="auth-footer">
            <p>Already have an account? <a href="#/">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  `;
    bindRegister();
}

function bindRegister() {
    const form = $("#register-form");
    const pwToggle = $("#toggle-reg-pw");
    const pwInput = $("#reg-password");

    pwToggle.addEventListener("click", () => {
        const isPassword = pwInput.type === "password";
        pwInput.type = isPassword ? "text" : "password";
        pwToggle.innerHTML = isPassword ? Icons.eyeOff : Icons.eye;
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#reg-name").value.trim();
        const email = $("#reg-email").value.trim();
        const password = pwInput.value;
        const confirmPassword = $("#reg-confirm").value;
        const department = $("#reg-dept").value;
        const year = $("#reg-year").value;
        const errEl = $("#reg-error");

        if (!name || !email || !password || !department || !year) {
            errEl.textContent = "Please fill in all fields";
            errEl.style.display = "block";
            return;
        }
        if (password !== confirmPassword) {
            errEl.textContent = "Passwords do not match";
            errEl.style.display = "block";
            return;
        }
        if (password.length < 6) {
            errEl.textContent = "Password must be at least 6 characters";
            errEl.style.display = "block";
            return;
        }
        if (Auth.register({ name, email, password, department, year })) {
            const user = Auth.getUser();
            Notifs.load(user.id);
            navigate("#/dashboard");
        } else {
            errEl.textContent = "An account with this email already exists";
            errEl.style.display = "block";
        }
    });
}

// ── Dashboard Page ──
let dashboardView = "list";
let calendarDate = new Date();

function renderDashboard() {
    if (!Auth.isAuthenticated()) { navigate("#/"); return; }
    const user = Auth.getUser();
    const registeredEvents = mockEvents.filter(e => user.registeredEvents.includes(e.id));
    const upcomingEvents = mockEvents
        .filter(e => new Date(e.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    let regSection = '';
    if (registeredEvents.length > 0) {
        regSection = `
      <section class="section animate-fadeIn" style="animation-delay:0.2s">
        <div class="section-title-row" style="margin-bottom:1rem">
          <span style="color:hsl(var(--secondary))">${Icons.ticket}</span>
          <h2>Your Registered Events</h2>
          <span class="reg-count">${registeredEvents.length}</span>
        </div>
        <div class="events-grid stagger">${registeredEvents.map(e => renderEventCard(e)).join('')}</div>
      </section>
    `;
    }

    let viewContent = '';
    if (dashboardView === "list") {
        if (upcomingEvents.length > 0) {
            viewContent = `<div class="events-grid stagger">${upcomingEvents.map(e => renderEventCard(e)).join('')}</div>`;
        } else {
            viewContent = `<div class="empty-state"><p>No upcoming events at the moment</p><p>Check back soon for new announcements!</p></div>`;
        }
    } else {
        viewContent = renderCalendarView(upcomingEvents, calendarDate);
    }

    app().innerHTML = `
    <div class="gradient-bg" style="min-height:100vh">
      ${renderHeader()}
      <main class="main-content">
        <div class="dashboard-welcome animate-fadeInUp">
          <h1>Hello, <span class="text-gradient-gold">${user.name.split(' ')[0]}</span></h1>
          <p class="text-muted">Discover what's happening on campus</p>
        </div>
        ${regSection}
        <section class="section animate-fadeIn" style="animation-delay:0.3s">
          <div class="section-header">
            <h2>Upcoming Events</h2>
            <div class="view-toggle">
              <button id="view-list" class="${dashboardView === 'list' ? 'active' : ''}">${Icons.layoutList}</button>
              <button id="view-cal" class="${dashboardView === 'calendar' ? 'active' : ''}">${Icons.calendarDays}</button>
            </div>
          </div>
          <div id="view-content">${viewContent}</div>
        </section>
      </main>
    </div>
  `;
    bindDashboard();
}

function bindDashboard() {
    bindHeaderEvents();

    $("#view-list").addEventListener("click", () => {
        dashboardView = "list";
        renderDashboard();
    });
    $("#view-cal").addEventListener("click", () => {
        dashboardView = "calendar";
        renderDashboard();
    });

    if (dashboardView === "calendar") {
        const prevBtn = $("#cal-prev");
        const nextBtn = $("#cal-next");
        if (prevBtn) prevBtn.addEventListener("click", () => {
            calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
            renderDashboard();
        });
        if (nextBtn) nextBtn.addEventListener("click", () => {
            calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
            renderDashboard();
        });
    }
}

// ── Event Details Page ──
function renderEventDetails(eventId) {
    const event = mockEvents.find(e => e.id === eventId);
    if (!event) { renderNotFound(); return; }

    const isLoggedIn = Auth.isAuthenticated();
    const isRegistered = Auth.isRegisteredForEvent(event.id);
    const relatedEvents = mockEvents.filter(e => event.relatedEvents.includes(e.id));
    const spotsLeft = event.maxAttendees - event.currentRegistrations;

    const subEventsHtml = event.subEvents.map(s => `<span class="activity-tag">${s}</span>`).join('');
    const guestsHtml = event.chiefGuests.map(g => `
    <div class="guest-card">
      <div class="guest-avatar gradient-royal">
        <span style="color:hsl(var(--secondary))">${Icons.star}</span>
      </div>
      <div>
        <p class="guest-name">${g.name}</p>
        <p class="guest-title">${g.designation}</p>
      </div>
    </div>
  `).join('');

    let actionBtn = '';
    if (isLoggedIn) {
        if (isRegistered) {
            actionBtn = `<button class="btn btn-registered">${Icons.userCheck} Registered</button>`;
        } else {
            actionBtn = `<button class="btn btn-primary" onclick="navigate('#/register-event/${event.id}')">Register for this Event</button>`;
        }
    } else {
        actionBtn = `<button class="btn btn-primary" onclick="navigate('#/')">Sign in to Register</button>`;
    }

    let relatedHtml = '';
    if (relatedEvents.length > 0) {
        relatedHtml = `
      <section class="animate-fadeIn" style="animation-delay:0.3s">
        <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem">You Might Also Like</h2>
        <div class="events-grid stagger">${relatedEvents.map(e => renderEventCard(e)).join('')}</div>
      </section>
    `;
    }

    app().innerHTML = `
    <div class="gradient-bg" style="min-height:100vh">
      ${isLoggedIn ? renderHeader() : ''}
      <main class="details-page">
        <button class="back-btn" onclick="history.back()">${Icons.arrowLeft} Back</button>
        <div class="details-card glass animate-fadeInUp">
          <div class="details-top">
            <div>
              <span class="badge badge-secondary" style="margin-bottom:0.75rem;display:inline-flex">${event.category}</span>
              <h1>${event.name}</h1>
            </div>
            <button class="share-btn" id="share-btn" title="Share event">${Icons.share2}</button>
          </div>
          <div class="details-meta">
            <div class="meta-row">${Icons.calendar}<span>${formatFullDate(event.date)}</span></div>
            <div class="meta-row"><span style="color:hsl(var(--secondary))">${Icons.clock}</span><span>${event.time}</span></div>
            <div class="meta-row">${Icons.mapPin}<span>${event.venue}</span></div>
            <div class="meta-row">${Icons.users}<span>${event.currentRegistrations}/${event.maxAttendees} registered · ${spotsLeft} spots left</span></div>
          </div>
          <p class="details-description">${event.description}</p>
          <div class="details-section">
            <h3>Activities</h3>
            <div class="activities-list">${subEventsHtml}</div>
          </div>
          <div class="details-section">
            <h3>Chief Guests</h3>
            <div class="guests-grid">${guestsHtml}</div>
          </div>
          <div class="details-actions">${actionBtn}</div>
        </div>
        ${relatedHtml}
      </main>
    </div>
  `;
    bindEventDetails();
}

function bindEventDetails() {
    if (Auth.isAuthenticated()) bindHeaderEvents();
    const shareBtn = $("#share-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            showToast("Link copied!", "Event link has been copied to clipboard");
        });
    }
}

// ── Event Registration Page ──
function renderEventRegistration(eventId) {
    if (!Auth.isAuthenticated()) { navigate("#/"); return; }
    const event = mockEvents.find(e => e.id === eventId);
    if (!event) { renderNotFound(); return; }
    const user = Auth.getUser();

    app().innerHTML = `
    <div class="gradient-bg" style="min-height:100vh">
      ${renderHeader()}
      <main class="reg-page">
        <button class="back-btn" onclick="history.back()">${Icons.arrowLeft} Back</button>
        <div class="glass animate-fadeInUp" style="border-radius:1rem;padding:2rem">
          <div class="event-summary-box">
            <h3>${event.name}</h3>
            <div class="event-summary-meta">
              <div class="meta-row">${Icons.calendar}<span>${formatFullDate(event.date)} · ${event.time}</span></div>
              <div class="meta-row">${Icons.mapPin}<span>${event.venue}</span></div>
            </div>
          </div>
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1.5rem">Confirm Registration</h2>
          <form id="event-reg-form">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input class="form-input" value="${user.name}" readonly />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input class="form-input" value="${user.email}" readonly />
            </div>
            <div class="form-group">
              <label class="form-label">Department</label>
              <input class="form-input" value="${user.department}" readonly />
            </div>
            <div class="form-group">
              <label class="form-label">Special Requirements (optional)</label>
              <input id="special-req" class="form-input" placeholder="Any dietary or accessibility needs" />
            </div>
            <div class="checkbox-row">
              <input type="checkbox" id="agree-terms" />
              <label for="agree-terms">I agree to attend this event and follow all college guidelines and regulations.</label>
            </div>
            <button type="submit" id="confirm-reg-btn" class="btn btn-primary btn-full" disabled>Confirm Registration</button>
          </form>
        </div>
      </main>
    </div>
  `;
    bindEventRegistration(event);
}

function bindEventRegistration(event) {
    bindHeaderEvents();
    const checkbox = $("#agree-terms");
    const submitBtn = $("#confirm-reg-btn");

    checkbox.addEventListener("change", () => {
        submitBtn.disabled = !checkbox.checked;
    });

    $("#event-reg-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!checkbox.checked) return;
        const reg = Auth.registerForEvent(event.id);
        if (reg) {
            const user = Auth.getUser();
            Notifs.add({
                userId: user.id,
                type: "registration_success",
                title: "Registration Confirmed",
                message: `✅ You're registered for ${event.name}!`,
                eventId: event.id,
                read: false,
                priority: "medium",
                icon: "✅",
            });
            navigate(`#/thank-you/${event.id}`);
        }
    });
}

// ── Thank You Page ──
function renderThankYou(eventId) {
    if (!Auth.isAuthenticated()) { navigate("#/"); return; }
    const event = mockEvents.find(e => e.id === eventId);

    let eventCard = '';
    if (event) {
        eventCard = `
      <div class="thankyou-event-card glass">
        <h3 class="text-gradient-gold">${event.name}</h3>
        <div class="event-summary-meta">
          <div class="meta-row">${Icons.calendar}<span>${formatFullDate(event.date)}</span></div>
          <div class="meta-row">${Icons.mapPin}<span>${event.venue}</span></div>
        </div>
      </div>
    `;
    }

    app().innerHTML = `
    <div class="gradient-bg" style="min-height:100vh">
      ${renderHeader()}
      <main class="thankyou-page">
        <div class="animate-scaleIn" style="margin-bottom:1.5rem">
          <div class="thankyou-icon">
            <span style="color:hsl(var(--secondary))">${Icons.partyPopper}</span>
          </div>
        </div>
        <div class="animate-fadeInUp" style="animation-delay:0.3s">
          <h1>Thanks for Registering!</h1>
          <p class="subtitle">You're all set. We can't wait to see you there!</p>
          ${eventCard}
          <div class="thankyou-notice">
            <span style="color:hsl(var(--secondary))">${Icons.bell}</span>
            <span>You'll receive updates about this event in your notifications</span>
          </div>
          <div style="display:flex;gap:0.75rem;justify-content:center">
            <button class="btn btn-primary" onclick="navigate('#/dashboard')">Back to Dashboard ${Icons.arrowRight}</button>
          </div>
        </div>
      </main>
    </div>
  `;
    bindHeaderEvents();
}

// ── Not Found Page ──
function renderNotFound() {
    app().innerHTML = `
    <div class="gradient-bg notfound-page">
      <h1 class="text-gradient-gold">404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button class="btn btn-primary" onclick="navigate('#/')">Go Home</button>
    </div>
  `;
}

// ═══════════ Header Event Binding ═══════════
function bindHeaderEvents() {
    const notifToggle = $("#notif-toggle");
    const logoutBtn = $("#logout-btn");
    const panelContainer = $("#notif-panel-container");

    if (notifToggle && panelContainer) {
        notifToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            if (panelContainer.innerHTML) {
                panelContainer.innerHTML = '';
            } else {
                panelContainer.innerHTML = renderNotificationPanel();
                bindNotifPanel();
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            Auth.logout();
            Notifs.load(null);
            navigate("#/");
        });
    }

    // Close notification panel on outside click
    document.addEventListener("click", (e) => {
        const panel = $("#notif-panel");
        if (panel && !panel.contains(e.target) && !e.target.closest("#notif-toggle")) {
            const container = $("#notif-panel-container");
            if (container) container.innerHTML = '';
        }
    });
}

function bindNotifPanel() {
    const closeBtn = $("#close-notifs");
    const markAllBtn = $("#mark-all-read");
    const container = $("#notif-panel-container");

    if (closeBtn) closeBtn.addEventListener("click", () => container.innerHTML = '');

    if (markAllBtn) {
        markAllBtn.addEventListener("click", () => {
            Notifs.markAllAsRead();
            container.innerHTML = renderNotificationPanel();
            bindNotifPanel();
            updateNotifBadge();
        });
    }

    document.querySelectorAll("[data-mark-id]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            Notifs.markAsRead(btn.dataset.markId);
            container.innerHTML = renderNotificationPanel();
            bindNotifPanel();
            updateNotifBadge();
        });
    });

    document.querySelectorAll(".notif-item").forEach(item => {
        item.addEventListener("click", () => {
            const notifId = item.dataset.notifId;
            const eventId = item.dataset.eventId;
            Notifs.markAsRead(notifId);
            container.innerHTML = '';
            navigate(`#/event/${eventId}`);
        });
    });
}

function updateNotifBadge() {
    const badgeEl = document.querySelector(".notif-badge");
    const unread = Notifs.getUnreadCount();
    if (badgeEl) {
        if (unread > 0) {
            badgeEl.textContent = unread > 99 ? '99+' : unread;
        } else {
            badgeEl.remove();
        }
    }
}

// ═══════════ SPA Router ═══════════
function router() {
    const hash = window.location.hash || "#/";
    const parts = hash.replace("#", "").split("/").filter(Boolean);

    // Route matching
    if (parts.length === 0 || (parts.length === 1 && parts[0] === "")) {
        renderLogin();
    } else if (parts[0] === "register" && parts.length === 1) {
        renderRegister();
    } else if (parts[0] === "dashboard") {
        renderDashboard();
    } else if (parts[0] === "event" && parts[1]) {
        renderEventDetails(parts[1]);
    } else if (parts[0] === "register-event" && parts[1]) {
        renderEventRegistration(parts[1]);
    } else if (parts[0] === "thank-you" && parts[1]) {
        renderThankYou(parts[1]);
    } else {
        renderNotFound();
    }
}

// ── Init ──
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
    // If user is already logged in, load notifications
    if (Auth.isAuthenticated()) {
        Notifs.load(Auth.getUser().id);
        // If they're on the root page, redirect to dashboard
        if (!window.location.hash || window.location.hash === "#/" || window.location.hash === "#") {
            navigate("#/dashboard");
            return;
        }
    }
    router();
});
