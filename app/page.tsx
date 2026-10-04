import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CampusLife from "@/components/CampusLife";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CampusLife />
      <Testimonials />
      <Footer />
    </main>
  );
}