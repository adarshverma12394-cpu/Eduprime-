import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Award, Users, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt="Classroom"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-[0.3em] mb-12"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>The Future of Learning is Here</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl font-display font-black text-white leading-[0.85] mb-12 uppercase italic"
            >
              Level Up <br />
              <span className="text-accent text-glow">Your Skills</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl text-white/60 mb-16 max-w-3xl mx-auto leading-tight font-medium"
            >
              Join <span className="text-white">500+ Elite Students</span>. Master the curriculum. <br />
              Get <span className="text-accent">Results</span>. Start your <span className="text-accent">Free Demo</span>.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24"
            >
              <Button size="lg" className="bg-white hover:bg-accent hover:text-white text-primary font-black text-xl px-12 h-20 rounded-full shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-2 active:translate-y-0 group">
                Book Free Demo
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:text-accent text-xl font-bold tracking-widest uppercase transition-all">
                Explore Courses
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
              {[
                { label: "Success Rate", val: "95%", icon: Award },
                { label: "Expert Mentors", val: "10+ Yrs", icon: Users },
                { label: "Top Toppers", val: "150+", icon: Star }
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass p-8 rounded-[2.5rem] flex flex-col items-center gap-4 group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <badge.icon className="text-accent w-8 h-8 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-black text-4xl leading-none mb-2">{badge.val}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{badge.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
