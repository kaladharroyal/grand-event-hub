import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Registration } from "@/types";
import { defaultUser } from "@/data/mockData";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (userData: Partial<User>) => boolean;
  logout: () => void;
  registerForEvent: (eventId: string) => Registration | null;
  isRegisteredForEvent: (eventId: string) => boolean;
  registrations: Registration[];
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("eventique_user");
    const storedRegs = localStorage.getItem("eventique_registrations");
    if (stored) setUser(JSON.parse(stored));
    if (storedRegs) setRegistrations(JSON.parse(storedRegs));
  }, []);

  const login = (email: string, password: string): boolean => {
    const usersStr = localStorage.getItem("eventique_users");
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      found.lastLogin = new Date().toISOString();
      setUser(found);
      localStorage.setItem("eventique_user", JSON.stringify(found));
      const regsStr = localStorage.getItem("eventique_registrations");
      if (regsStr) setRegistrations(JSON.parse(regsStr).filter((r: Registration) => r.userId === found.id));
      return true;
    }
    return false;
  };

  const register = (userData: Partial<User>): boolean => {
    const usersStr = localStorage.getItem("eventique_users");
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    if (users.find((u) => u.email === userData.email)) return false;
    const newUser: User = {
      ...defaultUser,
      ...userData,
      id: `user_${Date.now()}`,
      registeredEvents: [],
      lastLogin: new Date().toISOString(),
    } as User;
    users.push(newUser);
    localStorage.setItem("eventique_users", JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem("eventique_user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setRegistrations([]);
    localStorage.removeItem("eventique_user");
  };

  const registerForEvent = (eventId: string): Registration | null => {
    if (!user || user.registeredEvents.includes(eventId)) return null;
    const reg: Registration = {
      id: `reg_${Date.now()}`,
      userId: user.id,
      eventId,
      registeredAt: new Date().toISOString(),
      attended: false,
      feedbackSubmitted: false,
    };
    const updatedUser = { ...user, registeredEvents: [...user.registeredEvents, eventId] };
    setUser(updatedUser);
    localStorage.setItem("eventique_user", JSON.stringify(updatedUser));

    const allRegs = [...registrations, reg];
    setRegistrations(allRegs);
    const storedRegs = localStorage.getItem("eventique_registrations");
    const allStoredRegs: Registration[] = storedRegs ? JSON.parse(storedRegs) : [];
    allStoredRegs.push(reg);
    localStorage.setItem("eventique_registrations", JSON.stringify(allStoredRegs));

    // Update users list
    const usersStr = localStorage.getItem("eventique_users");
    if (usersStr) {
      const users: User[] = JSON.parse(usersStr);
      const idx = users.findIndex((u) => u.id === user.id);
      if (idx >= 0) {
        users[idx] = updatedUser;
        localStorage.setItem("eventique_users", JSON.stringify(users));
      }
    }
    return reg;
  };

  const isRegisteredForEvent = (eventId: string): boolean => {
    return user?.registeredEvents.includes(eventId) ?? false;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, registerForEvent, isRegisteredForEvent, registrations }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
