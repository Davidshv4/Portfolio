"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = (resolvedTheme || theme) === 'light';
  const icon = isLight ? '☼' : '☾';

  return (
    <header className="navbar reveal" id="top">
      <div className="nav-left">
        <a className="brand" href="#top">DevFlix</a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="nav-right">
        <div className="search">
          <input id="searchInput" type="search" placeholder="Search projects…" aria-label="Search projects" />
        </div>
        <button
          id="themeToggle"
          className="icon-btn"
          aria-label="Toggle theme"
          title="Toggle theme"
          onClick={() => setTheme(isLight ? 'dark' : 'light')}
        >
          <span className="icon">{mounted ? icon : ''}</span>
        </button>
      </div>
    </header>
  );
}


