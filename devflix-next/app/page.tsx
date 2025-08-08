import { Suspense } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container space-y-24 py-12">
        <About />
        <Suspense fallback={<div className="text-zinc-400">Loading projects…</div>}>
          <Projects />
        </Suspense>
        <Experience />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


