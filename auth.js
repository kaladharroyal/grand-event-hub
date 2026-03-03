// ── Auth Module (localStorage-based) ──
const Auth = (() => {
    let _user = null;
    let _registrations = [];

    function _persist() {
        if (_user) {
            localStorage.setItem("eventique_user", JSON.stringify(_user));
        }
    }

    function init() {
        const stored = localStorage.getItem("eventique_user");
        const storedRegs = localStorage.getItem("eventique_registrations");
        if (stored) _user = JSON.parse(stored);
        if (storedRegs) {
            _registrations = JSON.parse(storedRegs);
            if (_user) {
                _registrations = _registrations.filter(r => r.userId === _user.id);
            }
        }
    }

    function getUser() {
        return _user;
    }

    function isAuthenticated() {
        return !!_user;
    }

    function login(email, password) {
        const usersStr = localStorage.getItem("eventique_users");
        const users = usersStr ? JSON.parse(usersStr) : [];
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            found.lastLogin = new Date().toISOString();
            _user = found;
            localStorage.setItem("eventique_user", JSON.stringify(found));
            const regsStr = localStorage.getItem("eventique_registrations");
            if (regsStr) {
                _registrations = JSON.parse(regsStr).filter(r => r.userId === found.id);
            }
            return true;
        }
        return false;
    }

    function register(userData) {
        const usersStr = localStorage.getItem("eventique_users");
        const users = usersStr ? JSON.parse(usersStr) : [];
        if (users.find(u => u.email === userData.email)) return false;
        const newUser = Object.assign({}, defaultUser, userData, {
            id: "user_" + Date.now(),
            registeredEvents: [],
            lastLogin: new Date().toISOString(),
        });
        users.push(newUser);
        localStorage.setItem("eventique_users", JSON.stringify(users));
        _user = newUser;
        localStorage.setItem("eventique_user", JSON.stringify(newUser));
        return true;
    }

    function logout() {
        _user = null;
        _registrations = [];
        localStorage.removeItem("eventique_user");
    }

    function registerForEvent(eventId) {
        if (!_user || _user.registeredEvents.includes(eventId)) return null;
        const reg = {
            id: "reg_" + Date.now(),
            userId: _user.id,
            eventId,
            registeredAt: new Date().toISOString(),
            attended: false,
            feedbackSubmitted: false,
        };
        _user.registeredEvents.push(eventId);
        _persist();

        _registrations.push(reg);
        const storedRegs = localStorage.getItem("eventique_registrations");
        const allStoredRegs = storedRegs ? JSON.parse(storedRegs) : [];
        allStoredRegs.push(reg);
        localStorage.setItem("eventique_registrations", JSON.stringify(allStoredRegs));

        // Update users list
        const usersStr = localStorage.getItem("eventique_users");
        if (usersStr) {
            const users = JSON.parse(usersStr);
            const idx = users.findIndex(u => u.id === _user.id);
            if (idx >= 0) {
                users[idx] = _user;
                localStorage.setItem("eventique_users", JSON.stringify(users));
            }
        }
        return reg;
    }

    function isRegisteredForEvent(eventId) {
        return _user ? _user.registeredEvents.includes(eventId) : false;
    }

    init();

    return { getUser, isAuthenticated, login, register, logout, registerForEvent, isRegisteredForEvent };
})();
