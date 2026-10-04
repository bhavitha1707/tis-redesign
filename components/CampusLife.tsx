'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function CampusLife() {
  const highlights = [
    { title: 'Olympic Size Swimming Pool', category: 'Sports', color: 'from-blue-600/60' },
    { title: 'Modern Smart Classrooms', category: 'Academics', color: 'from-amber-600/60' },
    { title: 'Equestrian & Horse Riding Arena', category: 'Activities', color: 'from-emerald-600/60' },
    { title: 'Green Eco-Friendly Dorms', category: 'Boarding', color: 'from-purple-600/60' },
  ];

  return (
    <section id="campus" className="py-24 px-4 relative bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Vibrant Campus Life
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Where Learning Meets Adventure
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Spread across lush green foothills, our campus provides an inspiring backdrop where students thrive academically, artistically, and physically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-96 rounded-3xl overflow-hidden group border border-slate-800"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-slate-900/40 to-slate-950/80 z-10 transition-opacity duration-300 group-hover:opacity-90`} />
              
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-700 font-bold text-lg">
                [TIS Campus Image {idx + 1}]
              </div>

              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <span className="self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                  {item.category}
                </span>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Facility</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}