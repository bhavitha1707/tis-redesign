'use client';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Global Ranking', value: '#1 Co-Ed', icon: Award },
    { label: 'Acres Green Campus', value: '22+ Acres', icon: Compass },
    { label: 'Experienced Faculty', value: '100+', icon: Users },
    { label: 'Safe Boarding', value: '100% Secure', icon: ShieldCheck },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-slate-950 pt-32 pb-16 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium text-xs sm:text-sm mb-6 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Admissions Open for Academic Session 2026-27
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          Shaping Global Leaders at <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">TIS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal"
        >
          Nestled in the serene foothills of Dehradun, Tulas International School combines world-class academics, sports, and holistic character building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#admissions"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
          >
            Schedule Campus Visit
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl border border-slate-800 transition-all hover:border-slate-700"
          >
            Explore Programs
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col items-center text-center group hover:border-amber-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}