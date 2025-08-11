# DevFlix Portfolio

A Netflix-inspired developer portfolio showcasing projects in an interactive interface. Built with two versions: vanilla JavaScript and Next.js.

## 🛠️ Tech Stack

- **Next.js Version**: TypeScript, Tailwind CSS, Framer Motion
- **Vanilla Version**: HTML, CSS, JavaScript, Node.js server

## 📁 Structure

```
Portfolio/
├── devflix/                    # Vanilla JavaScript version
│   ├── app.js                  # Main application logic
│   ├── index.html              # Entry point
│   ├── styles.css              # Custom styles
│   ├── data/
│   │   └── projects.js         # Project data
│   └── assets/
│       └── favicon.svg
├── devflix-next/               # Next.js version
│   ├── app/                    # App router
│   ├── components/             # React components
│   ├── lib/                    # Utilities & data
│   ├── public/                 # Static assets
│   └── types/                  # TypeScript definitions
├── serve-devflix.js            # Development server
└── run-devflix.bat             # Windows launcher
```

## 🏃‍♂️ Quick Start

### Next.js Version
```bash
cd devflix-next
npm install
npm run dev
```

### Vanilla Version
```bash
npm start
# or
node serve-devflix.js
```

## ✨ Features

### Core Features
- 🎬 **Netflix-inspired UI** - Familiar browsing experience
- 🔍 **Project Search** - Real-time filtering by title, description, or technology
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🌙 **Dark/Light Theme** - Toggle between themes
- 🎭 **Smooth Animations** - Framer Motion (Next.js) / CSS transitions (Vanilla)
- 📊 **Project Categories** - Organized by technology or project type

### Project Showcase
- **Featured Projects** - Highlight your best work
- **Technology Badges** - Visual tech stack indicators
- **Live Demos & Source Code** - Direct links to GitHub and deployed sites
- **Detailed Descriptions** - Expandable project information
- **Image Galleries** - Project screenshots and demos

### Developer Experience
- ⚡ **Fast Loading** - Optimized images and lazy loading
- 🛠️ **Easy Customization** - Well-organized component structure
- 📦 **Type Safety** - Full TypeScript support (Next.js version)
- 🧹 **Code Quality** - ESLint, Prettier, Husky pre-commit hooks
- 📱 **PWA Ready** - Progressive Web App capabilities

## 🎨 Customization

### Adding Projects

Edit the project data files:
- **Next.js**: `devflix-next/lib/projects.ts`  
- **Vanilla**: `devflix/data/projects.js`

```javascript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Brief description',
  category: 'Web Development',
  badges: ['React', 'TypeScript'],
  thumb: '/image.jpg',
  featured: true
}
```
