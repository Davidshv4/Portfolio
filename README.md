# DevFlix Portfolio

A Netflix-inspired developer portfolio showcasing projects in an interactive, modern interface. Built with two versions: a vanilla JavaScript implementation and a modern Next.js version.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-DevFlix-red?style=for-the-badge&logo=netflix)

## 🎯 Overview

DevFlix transforms the traditional developer portfolio into an engaging, Netflix-style browsing experience. Features include project categorization, search functionality, responsive design, and smooth animations.

## 🚀 Live Demo

- **Next.js Version**: [Live Site](#) (Replace with your deployment URL)
- **Vanilla Version**: [Live Site](#) (Replace with your deployment URL)

## 🛠️ Tech Stack

### Next.js Version (`devflix-next/`)
- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)
- **Deployment**: Vercel-ready

### Vanilla Version (`devflix/`)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Server**: Node.js (minimal static server)
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Features**: Theme switching, search, responsive design

## 📁 Project Structure

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

### Next.js Version (Recommended)

```bash
# Navigate to Next.js version
cd devflix-next

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

### Vanilla Version

```bash
# Option 1: Use the Node.js server
npm start

# Option 2: Use the Windows batch file
run-devflix.bat

# Option 3: Manual server start
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

**Next.js Version**: Edit `devflix-next/lib/projects.ts`
**Vanilla Version**: Edit `devflix/data/projects.js`

```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Brief description',
  longDescription: 'Detailed description for modal',
  category: 'Web Development',
  badges: ['React', 'TypeScript', 'Tailwind'],
  thumb: '/path/to/thumbnail.jpg',
  github: 'https://github.com/username/repo',
  demo: 'https://your-demo-site.com',
  featured: true
}
```

### Styling

- **Next.js**: Modify `tailwind.config.ts` and component styles
- **Vanilla**: Edit `devflix/styles.css` for custom styling

### Personal Information

Update the following files with your information:
- Hero section content
- About section details
- Contact links and information
- Meta tags and SEO information

## 🚀 Deployment

### Next.js Version (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd devflix-next
vercel
```

### Vanilla Version (Any Static Host)

```bash
# Upload the devflix/ folder to your hosting provider
# Or use GitHub Pages, Netlify, etc.
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [sumanthsamala.com](https://sumanthsamala.com)
- Netflix UI/UX patterns
- Open source community

## 📧 Contact

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub](https://github.com/your-username)
- **Portfolio**: [Your Website](https://your-portfolio.com)

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ by [Your Name]
