'use client';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    quote: "Sending our son to TIS was the best decision we made. The blend of rigorous academics and personal attention has transformed him into a confident young leader.",
    name: "Rajesh & Sunita Sharma",
    role: "Parents of Grade 11 Student",
  },
  {
    quote: "The sports facilities and mentors here are world-class. I've grown not just as a student, but as an independent individual ready for college.",
    name: "Aarav Mehta",
    role: "Grade 12 Boarder",
  },
  {
    quote: "The pastoral care and nurturing environment give us complete peace of mind. TIS truly feels like a second home for our daughter.",
    name: "Dr. Alok & Priya Nair",
    role: "Parents of Grade 9 Student",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/40 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Parent & Student Voices
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Trusted by Families Worldwide
          </h2>
          <p className="text-slate-400 text-base">
            Hear what our community has to say about their journey at Tulas International School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between relative shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/15" />
              
              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div>
                <div className="font-bold text-white text-base">{rev.name}</div>
                <div className="text-xs text-amber-400 mt-0.5">{rev.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}