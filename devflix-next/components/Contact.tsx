"use client";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section id="contact" className="reveal">
      <h2 className="text-xl font-semibold text-zinc-300">Contact</h2>
      <form
        className="mt-4 grid gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4"
        onSubmit={(e) => { e.preventDefault(); setStatus('Thanks! I will get back to you soon.'); }}
      >
        <div className="grid sm:grid-cols-2 gap-3">
          <input className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2" placeholder="Name" required />
          <input className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2" placeholder="Email" type="email" required />
        </div>
        <textarea className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2" placeholder="Message" rows={5} required />
        <div className="flex gap-2">
          <button className="btn btn-primary" type="submit">Send</button>
          <a className="btn btn-ghost" href="mailto:you@example.com">Email</a>
          <a className="btn btn-ghost" href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        </div>
        {status && <p className="text-sm text-emerald-400">{status}</p>}
      </form>
    </section>
  );
}


