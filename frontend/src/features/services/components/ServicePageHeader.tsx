"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import { Brand } from "@/src/components/brand/Brand";
import { phoneHref, qrsSite } from "@/src/config/site";

export function ServicePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const callNowHref = phoneHref(qrsSite.contact.primaryPhone ?? "03124130449");

  return (
    <div className="ds-service-header-wrap">
      <header className="ds-service-header">
        <a href="/" aria-label="QRS Technologies home">
          <Brand compact />
        </a>

        <nav aria-label="Primary navigation" className="ds-service-header-nav">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#projects">Our projects</a>
          <a href="/about-company">About Company</a>
          <a href="/blogs">Blogs</a>
        </nav>

        <div className="ds-service-header-actions">
          <a href={callNowHref} className="ds-service-header-call">
            Call Now <PhoneCall size={14} aria-hidden="true" />
          </a>
          <a href="/book-a-demo" className="ds-service-header-cta">
            Schedule Meeting <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="ds-service-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav aria-label="Mobile service page navigation" className="ds-service-mobile-nav">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#projects" onClick={() => setMenuOpen(false)}>Our projects</a>
          <a href="/about-company" onClick={() => setMenuOpen(false)}>About Company</a>
          <a href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
          <a href={callNowHref} onClick={() => setMenuOpen(false)}>Call Now</a>
          <a href="/book-a-demo" onClick={() => setMenuOpen(false)}>Schedule Meeting</a>
        </nav>
      )}
    </div>
  );
}
