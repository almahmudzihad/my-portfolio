import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
