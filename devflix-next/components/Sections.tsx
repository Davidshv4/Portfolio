"use client";
import React from 'react';
const { useEffect, useMemo, useState } = React;
import { PROJECTS, type Project } from '@/lib/projects';

function groupProjects(projects: Project[], query: string) {
  const q = (query || '').trim().toLowerCase();
  const filtered = projects.filter((p) => {
    if (!q) return true;
    const hay = [p.title, p.description, p.category || '', ...(p.badges || [])]
      .join(' ')
      .toLowerCase();
    const matchesQuery = hay.includes(q);
    const excluded = (p.category || '').toLowerCase().includes('remove_category');
    return matchesQuery && !excluded;
  });

  const featured = filtered.filter((p) => p.featured);
  const byCategory = filtered.reduce<Record<string, Project[]>>((acc, p) => {
    const c = p.category || 'Misc';
    (acc[c] ||= []).push(p);
    return acc;
  }, {});
  return { featured, byCategory };
}

function Section({ title, items }: { title: string; items: Project[] }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="controls">
          <button className="icon-btn" aria-label="Scroll left" onClick={(e) => {
            const row = (e.currentTarget.closest('.section') as HTMLElement)?.querySelector('.row');
            if (row) (row as HTMLElement).scrollBy({ left: -(row as HTMLElement).clientWidth * 0.9, behavior: 'smooth' });
          }}>←</button>
          <button className="icon-btn" aria-label="Scroll right" onClick={(e) => {
            const row = (e.currentTarget.closest('.section') as HTMLElement)?.querySelector('.row');
            if (row) (row as HTMLElement).scrollBy({ left: (row as HTMLElement).clientWidth * 0.9, behavior: 'smooth' });
          }}>→</button>
        </div>
      </div>
      <div className="row" tabIndex={0}>
        {items.map((p) => (
          <article key={p.id} className="card">
            <div className="card-outer">
              <img
                className="thumb"
                alt={p.title}
                loading="lazy"
                src={p.thumb}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=960&q=80';
                }}
              />
              <div className="card-body">
                <div className="card-content">
                  <h3 className="card-title" title={p.title}>{p.title}</h3>
                  <div className="card-desc">
                    <p style={{ margin: 0 }}>{p.description}</p>
                  </div>
                  {p.longDescription && (
                    <MoreToggle description={p.longDescription} projectId={p.id} />
                  )}
                  <div className="badges">
                    {(p.badges || []).slice(0, 6).map((b, i) => (
                      <span key={i} className="badge">{b}</span>
                    ))}
                  </div>
                </div>
                <a className="btn view-btn" href={p.github || p.demo || '#'} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.05.66-3.7-1.3-3.7-1.3-.5-1.25-1.23-1.58-1.23-1.58-1-.68.08-.67.08-.67 1.12.08 1.7 1.15 1.7 1.15.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.68-1.48-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.14-2.93-.12-.28-.5-1.42.1-2.95 0 0 .95-.3 3.11 1.12.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.16-1.43 3.1-1.12 3.1-1.12.6 1.53.22 2.67.11 2.95.71.76 1.13 1.73 1.13 2.93 0 4.22-2.58 5.15-5.04 5.42.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53 4.35-1.45 7.5-5.57 7.5-10.43C23.1 5.33 18.27.5 12 .5Z"/></svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MoreToggle({ description, projectId }: { description: string; projectId: string }) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        className="btn ghost"
        style={{ marginTop: '.45rem' }}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >More</button>
      
      {open && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'var(--surface)',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative',
              border: '1px solid var(--border)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--muted)',
                padding: '0.5rem'
              }}
            >
              ×
            </button>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text)' }}>Project Details</h3>
            <p style={{ 
              margin: 0, 
              fontSize: '0.9rem', 
              color: 'var(--muted)',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Sections() {
  const [projects, setProjects] = useState(PROJECTS);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Wire search and theme toggle from Navbar inputs
    const input = document.getElementById('searchInput') as HTMLInputElement | null;
    const onInput = () => setQuery(input?.value || '');
    input?.addEventListener('input', onInput);
    return () => input?.removeEventListener('input', onInput);
  }, []);

  const grouped = useMemo(() => groupProjects(projects, query), [projects, query]);

  return (
    <div className="sections">
      {grouped.featured.length > 0 && (
        <Section title="Featured Projects" items={grouped.featured} />
      )}
    </div>
  );
}


