"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/60 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container py-24 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          David — Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-3 max-w-2xl text-zinc-400"
        >
          Full‑Stack Developer | Creative Builder | Problem Solver.
        </motion.p>
        <div className="mt-6 flex gap-3">
          <Link href="#projects" className="btn btn-primary">View Projects</Link>
          <Link href="#contact" className="btn btn-ghost">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}


