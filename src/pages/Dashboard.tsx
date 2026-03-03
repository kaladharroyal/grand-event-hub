import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { mockEvents } from "@/data/mockData";
import { DashboardHeader } from "@/components/DashboardHeader";
import { EventCard } from "@/components/EventCard";
import { CalendarView } from "@/components/CalendarView";
import { motion } from "framer-motion";
import { LayoutList, CalendarDays, Ticket } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [view, setView] = useState<"list" | "calendar">("list");

  const registeredEvents = mockEvents.filter((e) => user?.registeredEvents.includes(e.id));
  const upcomingEvents = mockEvents
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen gradient-bg">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Hello, <span className="text-gradient-gold">{user?.name?.split(" ")[0]}</span>
          </h1>
          <p className="text-muted-foreground">Discover what's happening on campus</p>
        </motion.div>

        {/* Registered Events */}
        {registeredEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Ticket className="w-5 h-5 text-secondary" />
              <h2 className="text-2xl font-serif font-semibold">Your Registered Events</h2>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-medium">
                {registeredEvents.length}
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {registeredEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif font-semibold">Upcoming Events</h2>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-accent/50">
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-md transition-colors ${view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("calendar")}
                className={`p-2 rounded-md transition-colors ${view === "calendar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <CalendarDays className="w-4 h-4" />
              </button>
            </div>
          </div>

          {view === "list" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          ) : (
            <CalendarView events={upcomingEvents} />
          )}

          {upcomingEvents.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg font-serif">No upcoming events at the moment</p>
              <p className="text-sm mt-1">Check back soon for new announcements!</p>
            </div>
          )}
        </motion.section>
      </main>
    </div>
  );
}
