import { useState } from "react";
import { Event } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  events: Event[];
}

export function CalendarView({ events }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const eventsByDate: Record<string, Event[]> = {};
  events.forEach((e) => {
    const d = e.date;
    if (!eventsByDate[d]) eventsByDate[d] = [];
    eventsByDate[d].push(e);
  });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-serif text-xl font-semibold">{monthName}</h3>
        <button onClick={nextMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center text-xs text-muted-foreground font-medium py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const dayEvents = eventsByDate[dateStr] || [];
          const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

          return (
            <div
              key={day}
              className={`relative p-2 min-h-[60px] rounded-lg transition-colors text-sm ${
                isToday ? "bg-primary/20 border border-primary/40" : "hover:bg-accent/50"
              } ${dayEvents.length > 0 ? "cursor-pointer" : ""}`}
              onClick={() => dayEvents.length === 1 && navigate(`/event/${dayEvents[0].id}`)}
            >
              <span className={`text-xs ${isToday ? "text-secondary font-bold" : "text-muted-foreground"}`}>
                {day}
              </span>
              {dayEvents.map((ev) => (
                <div
                  key={ev.id}
                  onClick={(e) => { e.stopPropagation(); navigate(`/event/${ev.id}`); }}
                  className="mt-1 text-[9px] leading-tight px-1 py-0.5 rounded bg-secondary/20 text-secondary truncate cursor-pointer hover:bg-secondary/30"
                >
                  {ev.name}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
