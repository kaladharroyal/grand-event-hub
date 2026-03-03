import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "@/data/mockData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PartyPopper, Calendar, MapPin, Bell, ArrowRight } from "lucide-react";

export default function ThankYou() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.id === id);

  return (
    <div className="min-h-screen gradient-bg">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-16 max-w-lg text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-4">
            <PartyPopper className="w-10 h-10 text-secondary" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Thanks for Registering!
          </h1>
          <p className="text-muted-foreground mb-8">You're all set. We can't wait to see you there!</p>

          {event && (
            <div className="glass rounded-xl p-6 mb-8 text-left">
              <h3 className="font-serif text-xl font-semibold mb-3 text-gradient-gold">{event.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {event.venue}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 justify-center mb-8 text-sm text-muted-foreground">
            <Bell className="w-4 h-4 text-secondary" />
            <span>You'll receive updates about this event in your notifications</span>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate("/dashboard")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Back to Dashboard <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
