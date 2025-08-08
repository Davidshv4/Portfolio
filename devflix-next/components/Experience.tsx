export default function Experience() {
  const items = [
    {
      company: 'Acme Corp',
      role: 'Software Engineer',
      dates: '2022 — Present',
      bullets: [
        'Built scalable services and high-quality UIs',
        'Led performance initiatives improving TTI by 35%'
      ],
      tech: ['TypeScript','React','Node.js','AWS']
    }
  ];

  return (
    <section id="experience" className="reveal">
      <h2 className="text-xl font-semibold text-zinc-300">Experience</h2>
      <div className="mt-4 grid gap-4">
        {items.map((x, idx) => (
          <article key={idx} className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-zinc-100 font-medium">{x.role} — {x.company}</h3>
                <p className="text-zinc-400 text-sm">{x.dates}</p>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-zinc-300 text-sm">
              {x.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              {x.tech.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


