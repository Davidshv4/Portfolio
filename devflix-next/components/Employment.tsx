"use client";
import React from 'react';

export default function Employment() {
  return (
    <section className="employment reveal">
      <div className="container">
        <h2>Current Employment</h2>
        <a 
          href="https://vitalalert.com/" 
          target="_blank" 
          rel="noreferrer" 
          className="employment-card"
          aria-label="Visit Vital Alert Technologies website"
        >
          <div className="employment-logo">
            <img 
              src="/vitalalert-logo.png" 
              alt="Vital Alert Technologies"
              onError={(e) => {
                // Fallback: show company name if logo doesn't load
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<div style="font-weight: bold; color: #8B9467; font-size: 1.1rem;">VITAL<br/>ALERT</div>';
                }
              }}
            />
          </div>
          <div className="employment-info">
            <h3>Software Engineer Intern</h3>
            <p className="company">VITAL ALERT TECHNOLOGIES, INC.</p>
          </div>
        </a>
      </div>
    </section>
  );
}
