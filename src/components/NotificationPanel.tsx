import { motion } from "framer-motion";
import { useNotifications } from "@/contexts/NotificationContext";
import { getTimeAgo } from "@/data/mockData";
import { Check, CheckCheck, X, BellOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export function NotificationPanel({ onClose }: Props) {
  const { notifications, markAsRead, markAllAsRead, unreadCount } = useNotifications();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-12 w-[380px] max-h-[480px] glass rounded-xl shadow-2xl overflow-hidden z-50"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <h3 className="font-serif text-lg font-semibold">Notifications</h3>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button onClick={markAllAsRead} className="text-xs text-secondary hover:underline flex items-center gap-1">
              <CheckCheck className="w-3 h-3" /> Mark all read
            </button>
          )}
          <button onClick={onClose} className="p-1 hover:bg-accent rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[400px]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <BellOff className="w-10 h-10 mb-3 opacity-40" />
            <p className="text-sm">No notifications yet</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => {
                markAsRead(notif.id);
                navigate(`/event/${notif.eventId}`);
                onClose();
              }}
              className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors border-b border-border/30 hover:bg-accent/50 ${
                !notif.read ? "bg-accent/30" : "opacity-70"
              }`}
            >
              <span className="text-xl mt-0.5 shrink-0">{notif.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug">{notif.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notif.message}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{getTimeAgo(notif.timestamp)}</p>
              </div>
              {!notif.read && (
                <button
                  onClick={(e) => { e.stopPropagation(); markAsRead(notif.id); }}
                  className="shrink-0 p-1 hover:bg-accent rounded"
                  title="Mark as read"
                >
                  <Check className="w-3 h-3 text-secondary" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
