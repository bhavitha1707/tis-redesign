'use client';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Home, Cpu, HeartHandshake, Compass } from 'lucide-react';

const featuresData = [
  {
    icon: BookOpen,
    title: 'World-Class Curriculum',
    desc: 'CBSE & international standards focusing on critical thinking, inquiry-based learning, and comprehensive intellectual rigor.',
  },
  {
    icon: Trophy,
    title: 'Elite Sports Academy',
    desc: 'Professional coaching in tennis, football, basketball, swimming, horseback riding, and international standard athletic complexes.',
  },
  {
    icon: Home,
    title: 'Luxurious Boarding',
    desc: 'State-of-the-art air-conditioned dormitories providing a warm, secure, and home-like atmosphere away from home.',
  },
  {
    icon: Cpu,
    title: 'Future-Ready Tech Labs',
    desc: 'Advanced STEAM labs, robotics workshops, and high-speed digital classrooms preparing students for tomorrow.',
  },
  {
    icon: HeartHandshake,
    title: 'Holistic Pastoral Care',
    desc: 'Dedicated mentors, wellness counselors, and round-the-clock medical care ensuring emotional and physical well-being.',
  },
  {
    icon: Compass,
    title: 'Leadership & Arts',
    desc: 'Vibrant cultural programs, debate clubs, music, dance, and leadership bootcamps to cultivate well-rounded personalities.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Why Choose TIS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            An Environment Engineered for Excellence
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We go beyond traditional textbooks to build confident, capable, and compassionate global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}