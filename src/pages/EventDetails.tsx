import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, MapPin, Users, UserCheck, Share2, Star } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { toast } from "@/hooks/use-toast";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, isRegisteredForEvent } = useAuth();

  const event = mockEvents.find((e) => e.id === id);
  if (!event) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Event not found</p>
      </div>
    );
  }

  const isRegistered = isRegisteredForEvent(event.id);
  const relatedEvents = mockEvents.filter((e) => event.relatedEvents.includes(e.id));
  const spotsLeft = event.maxAttendees - event.currentRegistrations;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Event link has been copied to clipboard" });
  };

  return (
    <div className="min-h-screen gradient-bg">
      {isAuthenticated && <DashboardHeader />}

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30 capitalize">{event.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{event.name}</h1>
            </div>
            <button onClick={handleShare} className="p-2 rounded-full hover:bg-accent transition-colors" title="Share event">
              <Share2 className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="grid gap-3 mb-6 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>{new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-4 h-4 text-secondary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="w-4 h-4 text-secondary" />
              <span>{event.currentRegistrations}/{event.maxAttendees} registered · {spotsLeft} spots left</span>
            </div>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-8">{event.description}</p>

          {/* Sub Events */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold mb-3">Activities</h3>
            <div className="flex flex-wrap gap-2">
              {event.subEvents.map((sub) => (
                <span key={sub} className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-sm">{sub}</span>
              ))}
            </div>
          </div>

          {/* Chief Guests */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold mb-3">Chief Guests</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {event.chiefGuests.map((guest) => (
                <div key={guest.name} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                  <div className="w-10 h-10 rounded-full gradient-royal flex items-center justify-center">
                    <Star className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{guest.name}</p>
                    <p className="text-xs text-muted-foreground">{guest.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          {isAuthenticated && (
            <div className="flex gap-3">
              {isRegistered ? (
                <Button disabled className="bg-emerald/20 text-emerald border-emerald/30">
                  <UserCheck className="w-4 h-4 mr-2" /> Registered
                </Button>
              ) : (
                <Button
                  onClick={() => navigate(`/register-event/${event.id}`)}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8"
                >
                  Register for this Event
                </Button>
              )}
            </div>
          )}

          {!isAuthenticated && (
            <Button onClick={() => navigate("/")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Sign in to Register
            </Button>
          )}
        </motion.div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-serif font-semibold mb-4">You Might Also Like</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
