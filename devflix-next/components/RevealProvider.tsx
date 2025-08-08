"use client";
import { useEffect } from 'react';

export default function RevealProvider({ children }: { children?: any }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}


