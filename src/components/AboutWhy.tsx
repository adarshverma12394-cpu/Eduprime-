import { motion } from "motion/react";
import { Users, Calendar, Heart, MessageSquare, Target, Lightbulb } from "lucide-react";

export default function AboutWhy() {
  const points = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Batch Size",
      description: "Limited students per batch for personalized attention."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Weekly Tests",
      description: "Regular assessments to track and improve performance."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Attention",
      description: "One-on-one mentoring for every student's growth."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Doubt Solving",
      description: "Dedicated sessions to clear all academic queries."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Result Oriented",
      description: "Proven strategies for top board and entrance results."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Modern Teaching",
      description: "Innovative methods to simplify complex concepts."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden mesh-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Students Learning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-3xl">
                  <p className="text-accent text-5xl font-display font-black mb-2">10+</p>
                  <p className="text-white font-bold text-sm uppercase tracking-widest">Years of Academic Mastery</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              The EduPrime Legacy
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-8 leading-[0.9] uppercase italic">
              Beyond <br />
              <span className="text-accent">Education</span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
              We don't just teach; we <span className="text-primary font-bold">ignite</span>. Our methodology is built for the <span className="text-accent font-bold">modern student</span> who demands excellence and results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-[2rem] group hover:bg-primary hover:text-white transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-black mb-3 uppercase italic">{point.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
