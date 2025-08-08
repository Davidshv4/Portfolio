export default function Skills() {
  const groups: Record<string, string[]> = {
    Languages: ['TypeScript','Python','C++','SQL'],
    Frameworks: ['React','Next.js','Express','Tailwind'],
    Cloud: ['AWS','Vercel','Netlify'],
    Databases: ['Postgres','MongoDB','SQLite'],
    Tools: ['Docker','GitHub Actions','Jest']
  };

  return (
    <section id="skills" className="reveal">
      <h2 className="text-xl font-semibold text-zinc-300">Skills</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groups).map(([k, list]) => (
          <div key={k} className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4">
            <h3 className="text-zinc-200 mb-2">{k}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


