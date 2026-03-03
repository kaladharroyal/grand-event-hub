import { useState } from "react";
import { Bell, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNotifications } from "@/contexts/NotificationContext";
import { NotificationPanel } from "./NotificationPanel";
import { motion, AnimatePresence } from "framer-motion";

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const { unreadCount } = useNotifications();
  const [showNotifs, setShowNotifs] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-gradient-gold tracking-wide">
            Eventique
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className="relative p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Bell className="w-5 h-5 text-foreground" />
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {unreadCount > 99 ? "99+" : unreadCount}
                </motion.span>
              )}
            </button>
            <AnimatePresence>
              {showNotifs && <NotificationPanel onClose={() => setShowNotifs(false)} />}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-hover">
            <User className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium hidden sm:inline">{user?.name}</span>
          </div>
          <button onClick={logout} className="p-2 rounded-full hover:bg-destructive/20 transition-colors" title="Logout">
            <LogOut className="w-4 h-4 text-muted-foreground hover:text-destructive" />
          </button>
        </div>
      </div>
    </header>
  );
}
