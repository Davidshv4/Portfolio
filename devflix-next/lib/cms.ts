export type CmsProject = {
  id: string;
  title: string;
  description: string;
  category: string;
  badges: string[];
  thumb: string;
  github?: string;
  demo?: string;
};

const DATOCMS_API_URL = process.env.DATOCMS_API_URL || 'https://graphql.datocms.com/';
const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || '';

export async function getProjects(): Promise<CmsProject[]> {
  if (!DATOCMS_API_TOKEN) {
    // Fallback static sample if no token configured
    return [
      {
        id: 'p1',
        title: 'Realtime Chat Platform',
        description: 'WebSocket-powered chat with rooms, presence, and search.',
        category: 'Full-Stack',
        badges: ['TypeScript','React','Node.js','WebSocket','Postgres'],
        thumb: 'https://picsum.photos/seed/chat/640/360',
        github: '#',
        demo: '#'
      },
      {
        id: 'p2',
        title: 'Neural Style Transfer',
        description: 'Apply artistic styles to photos using CNNs.',
        category: 'AI/ML',
        badges: ['Python','PyTorch','Flask'],
        thumb: 'https://picsum.photos/seed/nst/640/360'
      }
    ];
  }

  const query = `
    query Projects {
      allProjects(orderBy: _createdAt_DESC) {
        id
        title
        description
        category
        badges
        thumb { url }
        github
        demo
      }
    }
  `;

  const res = await fetch(DATOCMS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`DatoCMS error ${res.status}`);
  }

  const json = await res.json();
  const items = json?.data?.allProjects || [];
  const normalized: CmsProject[] = items.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    category: p.category || 'Misc',
    badges: p.badges || [],
    thumb: p.thumb?.url || '',
    github: p.github || '',
    demo: p.demo || '',
  }));
  return normalized;
}


