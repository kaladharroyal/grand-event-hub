// ── Notifications Module (localStorage-based) ──
const Notifs = (() => {
    let _notifications = [];
    let _userId = null;

    function _persist() {
        if (_userId) {
            localStorage.setItem("eventique_notifs_" + _userId, JSON.stringify(_notifications));
        }
    }

    function load(userId) {
        _userId = userId;
        if (!userId) { _notifications = []; return; }
        const stored = localStorage.getItem("eventique_notifs_" + userId);
        if (stored) {
            _notifications = JSON.parse(stored);
        } else {
            _notifications = generateNotificationsForUser(userId);
            _persist();
        }
    }

    function getAll() {
        return _notifications;
    }

    function getUnreadCount() {
        return _notifications.filter(n => !n.read).length;
    }

    function markAsRead(id) {
        const n = _notifications.find(n => n.id === id);
        if (n) { n.read = true; _persist(); }
    }

    function markAllAsRead() {
        _notifications.forEach(n => n.read = true);
        _persist();
    }

    function add(notif) {
        const full = Object.assign({}, notif, {
            id: "notif_" + Date.now(),
            timestamp: new Date().toISOString(),
        });
        _notifications.unshift(full);
        _persist();
    }

    function deleteNotif(id) {
        _notifications = _notifications.filter(n => n.id !== id);
        _persist();
    }

    return { load, getAll, getUnreadCount, markAsRead, markAllAsRead, add, deleteNotif };
})();
