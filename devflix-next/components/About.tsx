export default function About() {
  return (
    <section id="about" className="reveal">
      <h2 className="text-xl font-semibold text-zinc-300">About Me</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        <div className="sm:col-span-2 text-zinc-400">
          <p>
            I'm David, a full‑stack engineer focused on building fast, accessible, and delightful products.
            I work across the stack from polished UIs to reliable cloud backends and embedded systems.
          </p>
          <p className="mt-3">
            I value thoughtful design, strong engineering fundamentals, and shipping with craftsmanship.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 self-start">
          {['TypeScript','React','Node.js','Python','C/C++','Docker','AWS'].map(s => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}


