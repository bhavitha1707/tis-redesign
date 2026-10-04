'use client';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="admissions" className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-20 pb-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Info */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg">
              T
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block text-white leading-none">TIS</span>
              <span className="text-[10px] text-amber-400 tracking-widest uppercase font-semibold">Tulas Intl School</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Ranked among India's premier co-educational residential schools, delivering holistic education in the lap of nature.
          </p>
          <div className="flex flex-col gap-2.5 text-sm mt-2">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dhoolkot, Near Selakui, Dehradun, Uttarakhand, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+91 98370 38383 / +91 94120 56524</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>info@tis.edu.in</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Quick Links</h4>
          <a href="#features" className="text-sm hover:text-amber-400 transition-colors">Academics</a>
          <a href="#campus" className="text-sm hover:text-amber-400 transition-colors">Campus Life</a>
          <a href="#testimonials" className="text-sm hover:text-amber-400 transition-colors">Testimonials</a>
          <a href="https://tis.edu.in" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-400 transition-colors">Official Website</a>
        </div>

        {/* Programs */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Programs</h4>
          <span className="text-sm">Middle School</span>
          <span className="text-sm">Secondary School</span>
          <span className="text-sm">Senior Secondary (CBSE)</span>
          <span className="text-sm">Residential Boarding</span>
        </div>

        {/* Newsletter / Admissions Inquiry Box */}
        <div className="lg:col-span-4 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-base mb-2">Admission Enquiries</h4>
            <p className="text-xs text-slate-400 mb-6">
              Get in touch with our admission counselors to book a guided campus tour.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 flex-1"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-xl transition-colors flex items-center justify-center shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Tulas International School. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}