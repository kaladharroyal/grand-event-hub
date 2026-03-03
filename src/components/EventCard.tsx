import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Event } from "@/types";
import { isNewEvent, isEventSoon } from "@/data/mockData";
import { Calendar, MapPin, Users, Sparkles, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  event: Event;
  index?: number;
}

export function EventCard({ event, index = 0 }: Props) {
  const navigate = useNavigate();
  const isNew = isNewEvent(event.createdAt);
  const soon = isEventSoon(event.date);
  const spotsLeft = event.maxAttendees - event.currentRegistrations;
  const almostFull = spotsLeft < event.maxAttendees * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onClick={() => navigate(`/event/${event.id}`)}
      className="glass-hover rounded-xl p-5 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-xl font-semibold group-hover:text-secondary transition-colors leading-tight">
          {event.name}
        </h3>
        <div className="flex gap-1.5 shrink-0 ml-2">
          {isNew && (
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]">
              <Sparkles className="w-3 h-3 mr-0.5" /> New
            </Badge>
          )}
          {soon && (
            <Badge className="bg-destructive/20 text-destructive border-destructive/30 text-[10px]">
              <Clock className="w-3 h-3 mr-0.5" /> {soon === "today" ? "Today" : "Tomorrow"}
            </Badge>
          )}
        </div>
      </div>

      <div className="space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-secondary/70" />
          <span>{new Date(event.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} · {event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-secondary/70" />
          <span>{event.venue}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-secondary/70" />
          <span>{event.currentRegistrations}/{event.maxAttendees} registered</span>
          {almostFull && <span className="text-destructive text-xs font-medium">Almost full!</span>}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-3 line-clamp-2">{event.description}</p>

      <div className="flex gap-1.5 mt-3 flex-wrap">
        {event.subEvents.slice(0, 3).map((sub) => (
          <span key={sub} className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
            {sub}
          </span>
        ))}
        {event.subEvents.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-muted-foreground">
            +{event.subEvents.length - 3} more
          </span>
        )}
      </div>
    </motion.div>
  );
}
