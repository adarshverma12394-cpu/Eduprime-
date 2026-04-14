import { motion } from "motion/react";
import { Star, Quote, Award, TrendingUp } from "lucide-react";

export default function ResultsTestimonials() {
  const stats = [
    { label: "Board Toppers", value: "150+", icon: <Award className="w-6 h-6" /> },
    { label: "JEE Qualified", value: "85+", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "NEET Qualified", value: "60+", icon: <Star className="w-6 h-6" /> }
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      rank: "AIR 452, JEE Advanced",
      text: "The personal attention and weekly tests at EduPrime were the key to my success. The faculty is incredibly supportive.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sneha Gupta",
      rank: "98.5% in CBSE Class 12",
      text: "EduPrime made complex Physics and Math concepts so easy to understand. I couldn't have achieved this without them.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="results" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-white/10 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              The Hall of Fame
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-black text-white mb-12 leading-[0.9] uppercase italic">
              Our <br />
              <span className="text-accent text-glow">Legends</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="glass p-10 rounded-[3rem] group hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-accent/40 group-hover:rotate-12 transition-transform mb-8">
                    {stat.icon}
                  </div>
                  <p className="text-5xl md:text-6xl font-display font-black text-white mb-2">{stat.value}</p>
                  <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            {reviews.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.2) }}
                className="glass p-12 rounded-[4rem] relative group hover:shadow-accent/20 transition-all duration-500"
              >
                <Quote className="absolute top-10 right-12 text-white/5 w-24 h-24 group-hover:text-accent/20 transition-colors" />
                <div className="relative z-10">
                  <p className="text-white/80 italic text-2xl mb-10 leading-relaxed font-medium">"{item.text}"</p>
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-[2rem] object-cover border-4 border-white/10 shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-white font-black text-2xl uppercase italic tracking-tight">{item.name}</p>
                      <p className="text-accent font-bold text-sm tracking-[0.2em] uppercase">{item.rank}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
