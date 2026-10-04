'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Academics', href: '#features' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Admissions', href: '#admissions' },
  ];

  return (
    <header className={`fixed top-1.5 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl px-6 py-4 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md border border-slate-800/80 shadow-xl' : 'bg-transparent'
      }`}>
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
            T
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block text-white leading-none">TIS</span>
            <span className="text-[10px] text-amber-400 tracking-widest uppercase font-semibold">Tulas Intl School</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#admissions"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-md hover:shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4" />
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-amber-500 text-slate-950 font-bold text-center rounded-xl mt-2 shadow-lg"
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}