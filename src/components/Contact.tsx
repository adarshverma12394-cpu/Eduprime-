import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden mesh-gradient">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              Get in Touch
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-black text-slate-900 mb-12 leading-[0.9] uppercase italic">
              Start Your <br />
              <span className="text-accent">Journey</span>
            </h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Location</p>
                  <p className="text-slate-900 font-black text-xl">123 Education Hub, <br />Knowledge City, State 456789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Call Us</p>
                  <p className="text-slate-900 font-black text-xl">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Email Us</p>
                  <p className="text-slate-900 font-black text-xl">admissions@eduprime.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h4 className="text-4xl font-display font-black text-slate-900 mb-12 uppercase italic tracking-tight">Apply Now</h4>
              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="name" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-slate-50/50 border-none h-16 rounded-2xl focus-visible:ring-accent font-bold" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="bg-slate-50/50 border-none h-16 rounded-2xl focus-visible:ring-accent font-bold" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="email" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50/50 border-none h-16 rounded-2xl focus-visible:ring-accent font-bold" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="class" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Course</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-50/50 border-none h-16 rounded-2xl focus:ring-accent font-bold">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-none shadow-2xl">
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                        <SelectItem value="jee">JEE Prep</SelectItem>
                        <SelectItem value="neet">NEET Prep</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="message" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Your Goals</Label>
                  <Textarea id="message" placeholder="What do you want to achieve?" className="bg-slate-50/50 border-none min-h-[150px] rounded-3xl focus-visible:ring-accent font-bold" />
                </div>
                
                <Button className="w-full bg-primary hover:bg-accent text-white h-20 rounded-3xl text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all hover:-translate-y-2 active:translate-y-0 group">
                  Send Application
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
