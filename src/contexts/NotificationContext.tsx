import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Notification } from "@/types";
import { generateNotificationsForUser } from "@/data/mockData";

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notif: Omit<Notification, "id" | "timestamp">) => void;
  deleteNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children, userId }: { children: ReactNode; userId: string | null }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!userId) {
      setNotifications([]);
      return;
    }
    const stored = localStorage.getItem(`eventique_notifs_${userId}`);
    if (stored) {
      setNotifications(JSON.parse(stored));
    } else {
      const initial = generateNotificationsForUser(userId);
      setNotifications(initial);
      localStorage.setItem(`eventique_notifs_${userId}`, JSON.stringify(initial));
    }
  }, [userId]);

  const persist = useCallback((notifs: Notification[]) => {
    if (userId) localStorage.setItem(`eventique_notifs_${userId}`, JSON.stringify(notifs));
  }, [userId]);

  const markAsRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, read: true } : n));
      persist(updated);
      return updated;
    });
  };

  const markAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }));
      persist(updated);
      return updated;
    });
  };

  const addNotification = (notif: Omit<Notification, "id" | "timestamp">) => {
    const full: Notification = {
      ...notif,
      id: `notif_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    setNotifications((prev) => {
      const updated = [full, ...prev];
      persist(updated);
      return updated;
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      persist(updated);
      return updated;
    });
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead, addNotification, deleteNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationProvider");
  return ctx;
}
