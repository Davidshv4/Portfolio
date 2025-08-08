export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-6 mt-16">
      <div className="container flex items-center justify-between text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} David — DevFlix</span>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-300">Back to top</a>
      </div>
    </footer>
  );
}


