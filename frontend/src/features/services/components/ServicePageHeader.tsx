"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { Brand } from "@/src/components/brand/Brand";
import { phoneHref, qrsSite } from "@/src/config/site";
import { coreServiceMenu } from "@/src/features/services/data/coreServiceMenu";

export function ServicePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const callNowHref = phoneHref(qrsSite.contact.primaryPhone ?? "03124130449");

  useEffect(() => {
    if (!servicesOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const closeOnScroll = () => setServicesOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("scroll", closeOnScroll);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [servicesOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="ds-service-header-wrap">
      <header className="ds-service-header">
        <a href="/" aria-label="QRS Technologies home" onClick={closeMenus}>
          <Brand compact />
        </a>

        <nav aria-label="Primary navigation" className="ds-service-header-nav">
          <a href="/" onClick={closeMenus}>Home</a>
          <div className="ds-service-nav-dropdown" ref={servicesMenuRef}>
            <button
              type="button"
              className="ds-service-nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-controls="desktop-service-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <ChevronDown size={15} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="ds-service-mega-menu" id="desktop-service-menu">
                <div className="ds-service-mega-menu-intro">
                  <span>Our core services</span>
                  <p>Focused capabilities that help you build, get found, and grow with confidence.</p>
                  <a href="/#services" onClick={closeMenus}>View all services <ArrowUpRight size={14} aria-hidden="true" /></a>
                </div>
                <div className="ds-service-mega-menu-groups">
                  {coreServiceMenu.map((group) => (
                    <section key={group.title}>
                      <a href={group.href} className="ds-service-mega-menu-title" onClick={closeMenus}>{group.title}<ArrowUpRight size={14} aria-hidden="true" /></a>
                      <p>{group.description}</p>
                      <ul>
                        {group.items.map((item) => <li key={item.label}><a href={item.href} onClick={closeMenus}>{item.label}</a></li>)}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="/#projects" onClick={closeMenus}>Our projects</a>
          <a href="/about-company" onClick={closeMenus}>About Company</a>
          <a href="/blogs" onClick={closeMenus}>Blogs</a>
          <a href="/contact" onClick={closeMenus}>Contact</a>
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
        <nav aria-label="Mobile navigation" className="ds-service-mobile-nav">
          <a href="/" onClick={closeMenus}>Home</a>
          <span className="ds-service-mobile-nav-label">Services</span>
          {coreServiceMenu.map((group) => (
            <div className="ds-service-mobile-service-group" key={group.title}>
              <a href={group.href} onClick={closeMenus}>{group.title}</a>
              <div>
                {group.items.map((item) => <a href={item.href} key={item.label} onClick={closeMenus}>{item.label}</a>)}
              </div>
            </div>
          ))}
          <a href="/#projects" onClick={closeMenus}>Our projects</a>
          <a href="/about-company" onClick={closeMenus}>About Company</a>
          <a href="/blogs" onClick={closeMenus}>Blogs</a>
          <a href="/contact" onClick={closeMenus}>Contact</a>
          <a href={callNowHref} onClick={closeMenus}>Call Now</a>
          <a href="/book-a-demo" onClick={closeMenus}>Schedule Meeting</a>
        </nav>
      )}
    </div>
  );
}
