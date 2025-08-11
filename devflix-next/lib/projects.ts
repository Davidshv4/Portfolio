export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category?: string;
  badges?: string[];
  thumb: string;
  images?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'feat-1',
    title: 'Flight Price AI Chat Bot',
    description: 'AI chatbot that simulates offline flight search using embedded JSON data.',
    longDescription:
      'Developed an AI-powered chatbot using JavaScript and Node.js to simulate offline flight search based on embedded JSON data, including 90+ flights across 10 international cities.',
    category: 'Full-Stack Apps',
    badges: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'JSON', 'Bash', 'Windows Batch'],
    thumb: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&q=80',
    images: ['/flight-ai.jpg'],
    github: 'https://github.com/Davidshv4/Flight-Price-AI-Chat-Bot',
    demo: 'https://github.com/Davidshv4/Flight-Price-AI-Chat-Bot',
    featured: true,
  },
  {
    id: 'ml-1',
    title: 'Enterprise Security Audit Tool',
    description: 'Automated security audit tool for scanning enterprise applications for vulnerabilities.',
    longDescription:
      'Developed an automated security audit tool using C# and .NET 6.0 with SQL Server integration for scanning enterprise applications, detecting authentication vulnerabilities, dependency issues, and generating comprehensive compliance reports for IT teams.',
    category: 'Full-Stack Apps',
    badges: ['C#', '.NET 6.0', 'SQL Server', 'REST APIs', 'PowerShell', 'Security'],
    thumb: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&q=80',
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&q=80'],
    github: 'https://github.com/Davidshv4/SecurityAuditTool',
    demo: 'https://github.com/Davidshv4/SecurityAuditTool',
    featured: true,
  },
  {
    id: 'feat-3',
    title: 'Portfolio Website',
    description: 'Netflix-inspired portfolio showcasing projects and skills with modern design.',
    longDescription:
      'Built a modern, responsive portfolio website inspired by Netflix\'s UI design using Next.js, TypeScript, and Tailwind CSS. Features include dark/light mode toggle, smooth animations, project carousels, employment section, and responsive design with hover effects.',
    category: 'Full-Stack Apps',
    badges: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'CSS3', 'HTML5'],
    thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 'full-1',
    title: 'Kanban Task Manager',
    description: 'Drag-and-drop boards, team roles, and analytics.',
    longDescription:
      'A Kanban-style task manager with column WIP limits, swimlanes, and team permissions. Backend APIs secured with JWT and rate limits.',
    category: 'Full-Stack Apps',
    badges: ['React', 'Express', 'MongoDB', 'JWT'],
    thumb: 'https://picsum.photos/seed/kanban/640/360',
    images: ['https://picsum.photos/seed/kanban1/960/540'],
    github: 'https://github.com/yourusername/kanban',
    demo: 'https://example.com/kanban',
    featured: false,
  },
  {
    id: 'embed-1',
    title: 'IoT Sensor Node',
    description: 'Low-power ESP32 node with OTA updates and telemetry.',
    longDescription:
      'Embedded firmware for an ESP32 sensor node that publishes telemetry via MQTT, supports OTA updates, and uses deep sleep for long battery life.',
    category: 'REMOVE_CATEGORY',
    badges: ['C++', 'ESP32', 'FreeRTOS', 'MQTT'],
    thumb: 'https://picsum.photos/seed/iot/640/360',
    images: ['https://picsum.photos/seed/iot1/960/540'],
    github: 'https://github.com/yourusername/iot-sensor',
    demo: '',
    featured: false,
  },
  {
    id: 'oss-1',
    title: 'Open Source CLI Tool',
    description: 'Cross-platform dev utility with plugins.',
    longDescription:
      'A modular CLI with a plugin system, auto-updates, and great DX. Includes extensive tests and documentation.',
    category: 'REMOVE_CATEGORY',
    badges: ['Node.js', 'TypeScript', 'CLI'],
    thumb: 'https://picsum.photos/seed/cli/640/360',
    images: ['https://picsum.photos/seed/cli1/960/540'],
    github: 'https://github.com/yourusername/dev-cli',
    demo: '',
    featured: false,
  },
  {
    id: 'ml-2',
    title: 'Vision Inference API',
    description: 'Fast image classification API with batching.',
    longDescription:
      'GPU-accelerated inference service exposing REST and gRPC endpoints, with autoscaling and caching.',
    category: 'AI/ML Tools',
    badges: ['Python', 'FastAPI', 'CUDA'],
    thumb: 'https://picsum.photos/seed/vision/640/360',
    images: ['https://picsum.photos/seed/vision1/960/540'],
    github: 'https://github.com/yourusername/vision-api',
    demo: '',
    featured: false,
  },
];


