import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Microscope, Calculator, Star } from "lucide-react";

export default function CoursesFaculty() {
  const courses = [
    {
      title: "Foundation (8–10)",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Strong fundamentals for Science & Math.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Senior Secondary (11–12)",
      icon: <Calculator className="w-6 h-6" />,
      description: "Board Exam focus with expert guidance.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "JEE / NEET Prep",
      icon: <Microscope className="w-6 h-6" />,
      description: "Rigorous training for entrance exams.",
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  const teachers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Physics Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Prof. Anjali Sharma",
      role: "Mathematics Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Dr. Sameer Verma",
      role: "Chemistry Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-lg font-bold uppercase tracking-widest mb-4">Courses & Faculty</h2>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
            Expert Guidance for <span className="text-accent">Success</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -20, rotateY: 5, rotateX: 5 }}
              className="perspective-1000"
            >
              <Card className="glass border-none h-full rounded-[3rem] overflow-hidden group transition-all duration-500">
                <div className={`h-4 w-full ${course.color.replace('bg-', 'bg-')}`} />
                <CardHeader className="p-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${course.color}`}>
                    {course.icon}
                  </div>
                  <CardTitle className="text-3xl font-display font-black text-slate-900 mb-4 uppercase italic">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-10 pb-12">
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">{course.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[5rem] -rotate-1 scale-105" />
          <div className="relative glass rounded-[5rem] p-12 md:p-24 border-white/40">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
                  The Mentors
                </div>
                <h4 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[0.9] uppercase italic">
                  Elite <br />
                  <span className="text-primary">Faculty</span>
                </h4>
              </div>
              <p className="text-slate-500 text-xl font-medium max-w-sm">
                Our mentors are industry veterans dedicated to your <span className="text-accent font-bold">breakthrough</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-16">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group text-center"
                >
                  <div className="relative mb-10 mx-auto w-64 h-64 md:w-72 md:h-72">
                    <div className="absolute inset-0 bg-accent rounded-[4rem] rotate-12 group-hover:rotate-[20deg] transition-transform duration-700 opacity-20" />
                    <div className="absolute inset-0 bg-primary rounded-[4rem] -rotate-6 group-hover:-rotate-12 transition-transform duration-700 opacity-20" />
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-[4rem] border-4 border-white shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h5 className="text-3xl font-display font-black text-slate-900 mb-2 uppercase italic tracking-tight">{teacher.name}</h5>
                  <p className="text-accent font-bold text-sm uppercase tracking-[0.4em]">{teacher.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
