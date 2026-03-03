import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { useNotifications } from "@/contexts/NotificationContext";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export default function EventRegistration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, registerForEvent } = useAuth();
  const { addNotification } = useNotifications();
  const [agreed, setAgreed] = useState(false);
  const [requirements, setRequirements] = useState("");

  const event = mockEvents.find((e) => e.id === id);
  if (!event) return <div className="min-h-screen gradient-bg flex items-center justify-center text-muted-foreground">Event not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    const reg = registerForEvent(event.id);
    if (reg) {
      addNotification({
        userId: user!.id,
        type: "registration_success",
        title: "Registration Confirmed",
        message: `✅ You're registered for ${event.name}!`,
        eventId: event.id,
        read: false,
        priority: "medium",
        icon: "✅",
      });
      navigate(`/thank-you/${event.id}`);
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8 max-w-lg">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8">
          {/* Event Summary */}
          <div className="mb-6 p-4 rounded-xl bg-accent/50 border border-border/30">
            <h3 className="font-serif text-lg font-semibold mb-2">{event.name}</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-secondary" />{new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {event.time}</div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-secondary" />{event.venue}</div>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-semibold mb-6">Confirm Registration</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <Input value={user?.name ?? ""} readOnly className="bg-accent/50 border-border/50 opacity-70" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <Input value={user?.email ?? ""} readOnly className="bg-accent/50 border-border/50 opacity-70" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Department</label>
              <Input value={user?.department ?? ""} readOnly className="bg-accent/50 border-border/50 opacity-70" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Special Requirements (optional)</label>
              <Input value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Any dietary or accessibility needs" className="bg-accent/50 border-border/50" />
            </div>

            <div className="flex items-start gap-2 pt-2">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
              <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I agree to attend this event and follow all college guidelines and regulations.
              </label>
            </div>

            <Button type="submit" disabled={!agreed} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold disabled:opacity-40">
              Confirm Registration
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
