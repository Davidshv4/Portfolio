import Image from 'next/image';
import { getProjects } from '@/lib/cms';

export default async function Projects() {
  const items = await getProjects();
  const groups = items.reduce((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <section id="projects" className="reveal">
      <h2 className="text-xl font-semibold text-zinc-300">Projects</h2>
      <div className="mt-4 space-y-10">
        {Object.entries(groups).map(([cat, list]) => (
          <div key={cat}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg text-zinc-200">{cat}</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map(p => (
                <article key={p.id} className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 hover:border-zinc-700 transition">
                  <div className="relative aspect-video">
                    <Image src={p.thumb} alt={p.title} fill className="object-cover rounded-t-xl" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-zinc-100 truncate">{p.title}</h4>
                    <p className="text-sm text-zinc-400 line-clamp-2">{p.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.badges.map(b => (
                        <span key={b} className="chip text-xs">{b}</span>
                      ))}
                    </div>
                    <div className="mt-3 flex gap-2">
                      {p.github && <a href={p.github} className="btn btn-ghost text-sm">GitHub</a>}
                      {p.demo && <a href={p.demo} className="btn btn-primary text-sm">Live Demo</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


