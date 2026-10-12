"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, PhoneCall, Star, X } from "lucide-react";
import { Brand } from "@/src/components/brand/Brand";
import { AgencyFooter } from "@/src/components/layout/AgencyFooter";
import { phoneHref, qrsSite, whatsappHref } from "@/src/config/site";
import { ResponsiveImage } from "@/src/components/ui/ResponsiveImage";
import { heroCards } from "@/src/features/home/data/content";
import { WhatsAppLeadBar } from "@/src/features/home/components/WhatsAppLeadBar";
import { serviceMenuGroups } from "@/src/features/services/data/services";
import { coreServiceMenu } from "@/src/features/services/data/coreServiceMenu";

const reasonsToChooseQrs = [
  { number: "01", title: "One connected team", copy: "Strategy, design, engineering, and growth expertise work together from the start—so decisions stay aligned." },
  { number: "02", title: "Built around outcomes", copy: "We focus the work on the customer, operational, or revenue result that makes the biggest difference to your business." },
  { number: "03", title: "Clear, practical delivery", copy: "You see the plan, progress, and priorities at every stage, with solutions your team can confidently own." },
] as const;

const approachSteps = [
  {
    number: "01",
    title: "Identify",
    summary: "Find the highest-value opportunity before committing to a solution.",
    terminal: ["Business goals mapped", "Current workflow reviewed", "Priority opportunity selected"],
    heading: "A sharper view of the opportunity.",
    copy: "We listen first—mapping the people, systems, and moments that matter so the work starts with a meaningful outcome.",
    outcomes: ["Outcome-focused brief", "Shared priorities", "Clear next step"],
  },
  {
    number: "02",
    title: "Design",
    summary: "Shape a solution around your team, customers, and real-world workflow.",
    terminal: ["Operational guardrails defined", "User journeys prioritised", "Solution blueprint ready"],
    heading: "Tailored systems, designed for your reality.",
    copy: "We turn the opportunity into a practical blueprint: useful experiences, clear technical decisions, and the guardrails needed for confident delivery.",
    outcomes: ["Human-centred journeys", "Secure solution architecture", "Implementation-ready blueprint"],
  },
  {
    number: "03",
    title: "Build",
    summary: "Bring the design to life with quality, clarity, and momentum.",
    terminal: ["Core experience built", "Key workflows connected", "Quality checks completed"],
    heading: "A build that is ready to work hard.",
    copy: "Our team delivers in focused increments, keeping the experience, integrations, and operational detail aligned from the first release.",
    outcomes: ["Focused delivery plan", "Connected workflows", "Quality assurance"],
  },
  {
    number: "04",
    title: "Implement",
    summary: "Launch deliberately, measure what matters, and refine with confidence.",
    terminal: ["Release plan confirmed", "Team handover prepared", "Performance signals tracked"],
    heading: "A calm path from launch to adoption.",
    copy: "We put the work into use with a measured rollout, dependable handover, and visibility into the signals that guide the next improvement.",
    outcomes: ["Launch readiness", "Team enablement", "Practical measurement"],
  },
  {
    number: "05",
    title: "Enable",
    summary: "Help your team own the outcome and keep improving it over time.",
    terminal: ["Knowledge shared", "Ownership model agreed", "Improvement backlog ready"],
    heading: "Progress that continues after delivery.",
    copy: "We leave your people with the clarity, documentation, and confidence to use the system well—and evolve it when the next opportunity arrives.",
    outcomes: ["Confident internal ownership", "Useful documentation", "Continuous improvement"],
  },
] as const;

const projects = [
  {
    number: "01",
    type: "Digital platform",
    title: "A clearer digital front door.",
    copy: "Modern web experiences that make a complex offer easy to understand, trust, and act on.",
    tags: ["Web strategy", "UX & UI", "Engineering"],
    visual: "platform",
  },
  {
    number: "02",
    type: "Connected operations",
    title: "Workflows that move with the team.",
    copy: "Connected systems and automation designed around the actual work behind a growing business.",
    tags: ["Automation", "Integrations", "Operations"],
    visual: "operations",
  },
  {
    number: "03",
    type: "Customer experience",
    title: "Better moments across the journey.",
    copy: "Focused digital products that make every important customer interaction feel more considered.",
    tags: ["Product design", "Customer journeys", "Growth"],
    visual: "experience",
  },
] as const;

const reviews = [
  { id: "01", rating: "4.5", quote: "Add an approved client quote here about the clarity and value QRS brought to the work.", focus: "Strategy & delivery" },
  { id: "02", rating: "4.0", quote: "Add an approved client quote here about a smoother workflow, product, or customer experience.", focus: "Digital experience" },
  { id: "03", rating: "4.5", quote: "Add an approved client quote here about the practical thinking and quality of the implementation.", focus: "Implementation" },
  { id: "04", rating: "4.0", quote: "Add an approved client quote here about the partnership and communication throughout delivery.", focus: "Collaboration" },
  { id: "05", rating: "4.5", quote: "Add an approved client quote here about a useful automation, integration, or operational improvement.", focus: "Automation" },
  { id: "06", rating: "4.0", quote: "Add an approved client quote here about the confidence and momentum created for the next step.", focus: "Growth" },
] as const;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const [activeHero, setActiveHero] = useState(0);
  const [activeApproach, setActiveApproach] = useState(1);
  const [activeReview, setActiveReview] = useState(0);
  const activeStep = approachSteps[activeApproach];
  const visibleReviews = [0, 1, 2].map((offset) => reviews[(activeReview + offset) % reviews.length]);
  const callNowHref = phoneHref(qrsSite.contact.primaryPhone ?? "03124130449");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroCards.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveApproach((current) => (current + 1) % approachSteps.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("qrs-motion-ready");
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("qrs-motion-ready");
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("qrs-motion-ready");
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="qrs-page" id="top">
      <section className="qrs-hero" aria-label={`${qrsSite.name} digital services`}>
        <div className="qrs-hero-media" aria-label="Core services showcase">
          {heroCards.map((card, index) => (
            <div
              className={`qrs-hero-slide${index === activeHero ? " is-active" : ""}`}
              key={card.id}
            >
              <ResponsiveImage
                source={card.src}
                widths={[768, 1280, 1920]}
                sizes="(max-width: 960px) 100vw, 50vw"
                alt={card.alt}
                style={{ objectPosition: card.position }}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
              />
            </div>
          ))}

          <div className="qrs-hero-media-dots" role="tablist" aria-label="Hero image cards">
            {heroCards.map((card, index) => (
              <button
                type="button"
                key={card.id}
                role="tab"
                aria-selected={index === activeHero}
                aria-label={`View image card ${index + 1}`}
                className={`qrs-hero-media-dot${index === activeHero ? " is-active" : ""}`}
                onClick={() => setActiveHero(index)}
              />
            ))}
          </div>
        </div>
        <div className="qrs-hero-overlay" aria-hidden="true" />

        <header className="qrs-header">
          <a href="#top" aria-label={`${qrsSite.name} home`} onClick={closeMenu}><Brand light /></a>
          <nav className={`qrs-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
            <a href="#top" onClick={closeMenu}>Home</a>
            <div className="qrs-nav-services-dropdown" ref={servicesMenuRef}>
              <button type="button" className="qrs-nav-services-trigger" aria-expanded={servicesOpen} aria-controls="home-service-menu" onClick={() => setServicesOpen((open) => !open)}>Services <ChevronDown size={15} aria-hidden="true" /></button>
              {servicesOpen && (
                <div className="qrs-home-service-menu" id="home-service-menu">
                  <div className="qrs-home-service-menu-intro">
                    <span>Our core services</span>
                    <p>Focused capabilities to build, get found, and grow with confidence.</p>
                    <a href="#services" onClick={closeMenu}>View all services <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </div>
                  <div className="qrs-home-service-menu-groups">
                    {coreServiceMenu.map((group) => (
                      <section key={group.title}>
                        <a href={group.href} className="qrs-home-service-menu-title" onClick={closeMenu}>{group.title}<ArrowUpRight size={14} aria-hidden="true" /></a>
                        <p>{group.description}</p>
                        <ul>{group.items.map((item) => <li key={item.label}><a href={item.href} onClick={closeMenu}>{item.label}</a></li>)}</ul>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#projects" onClick={closeMenu}>Our projects</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="/about-company" onClick={closeMenu}>About Company</a>
            <a href="/blogs" onClick={closeMenu}>Blogs</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
            {qrsSite.contact.whatsappNumber && (
              <a
                href={whatsappHref(qrsSite.contact.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="qrs-mobile-nav-action qrs-mobile-nav-whatsapp"
                onClick={closeMenu}
              >
                <MessageCircle size={15} aria-hidden="true" /> Chat on WhatsApp
              </a>
            )}
            <a href={callNowHref} className="qrs-mobile-nav-action" onClick={closeMenu}>Call Now</a>
            <a href="/book-a-demo" className="qrs-mobile-nav-action" onClick={closeMenu}>Schedule Meeting</a>
          </nav>
          <div className="qrs-header-actions">
            {qrsSite.contact.whatsappNumber && (
              <a
                href={whatsappHref(qrsSite.contact.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="qrs-header-whatsapp-gold"
                aria-label="Start WhatsApp conversation"
              >
                <span className="qrs-header-whatsapp-shimmer" aria-hidden="true" />
                <MessageCircle size={15} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            )}
            <a href={callNowHref} className="qrs-header-call">Call Now <PhoneCall size={15} aria-hidden="true" /></a>
            <a href="/book-a-demo" className="qrs-header-cta">Schedule Meeting <ArrowUpRight size={15} aria-hidden="true" /></a>
            <button type="button" className="qrs-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        <div className="qrs-hero-content">
          <div className="qrs-hero-copy">
            <span className="qrs-eyebrow">QRS TECHNOLOGIES · DIGITAL SERVICES</span>
            <h1>Technology that makes your next move <em>clearer.</em></h1>
            <p>{qrsSite.description} From strategy to launch, we bring the right people, process, and technology together.</p>
            <blockquote className="qrs-hero-quote">“Progress happens when technology makes work clearer, faster, and more human.”</blockquote>
            <div className="qrs-hero-actions">
              <a href={callNowHref} className="qrs-button qrs-button--primary">Call Now <ArrowRight size={16} aria-hidden="true" /></a>
              <a href="/book-a-demo" className="qrs-button qrs-button--secondary">Schedule Meeting <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="qrs-approach" id="approach" aria-labelledby="approach-title">
          <div className="qrs-approach-intro" data-reveal>
            <div>
              <span className="qrs-section-kicker">HOW QRS WORKS</span>
              <h2 id="approach-title">A clear path from opportunity to impact.</h2>
            </div>
            <p>We keep the work visible, practical, and connected to the people who will use it. Select a phase to see how we turn a good brief into useful progress.</p>
          </div>

          <div className="qrs-approach-timeline" aria-label="QRS delivery process" data-reveal>
            {approachSteps.map((step, index) => (
              <button
                type="button"
                key={step.number}
                className={`qrs-approach-step${index <= activeApproach ? " is-complete" : ""}${index === activeApproach ? " is-active" : ""}`}
                onClick={() => setActiveApproach(index)}
                aria-pressed={index === activeApproach}
              >
                <span className="qrs-approach-step-number">{step.number}</span>
                <span className="qrs-approach-step-copy"><strong>{step.title}</strong><small>{step.summary}</small></span>
              </button>
            ))}
          </div>
          <div className="qrs-approach-progress" aria-hidden="true"><span key={activeStep.number} /></div>

          <div className="qrs-approach-showcase" data-reveal>
            <div className="qrs-terminal" key={`terminal-${activeStep.number}`} aria-label={`${activeStep.title} phase details`}>
              <div className="qrs-terminal-bar"><span /><span /><span /><code>qrs-technologies · delivery process</code></div>
              <div className="qrs-terminal-content">
                <p className="qrs-terminal-command">$ {activeStep.title.toLowerCase()}_phase --ready</p>
                {activeStep.terminal.map((line) => <p className="qrs-terminal-check" key={line}>✓ {line}</p>)}
                <p className="qrs-terminal-result">→ QRS phase {activeStep.number} ready</p>
              </div>
            </div>
            <div className="qrs-approach-detail" key={`detail-${activeStep.number}`}>
              <div className="qrs-phase-label"><span>— IN PRACTICE</span><b>PHASE {activeStep.number} OF 05</b></div>
              <h3>{activeStep.heading}</h3>
              <p>{activeStep.copy}</p>
              <ul>
                {activeStep.outcomes.map((outcome) => <li key={outcome}><Check size={15} aria-hidden="true" />{outcome}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="qrs-why-choose" aria-labelledby="why-choose-title">
          <div className="qrs-why-choose-intro" data-reveal>
            <div>
              <span className="qrs-section-kicker">WHY CHOOSE QRS</span>
              <h2 id="why-choose-title">A capable partner for the work that matters next.</h2>
            </div>
            <p>QRS brings the right capabilities into one focused team, making it easier to move from a good idea to a useful, measurable result.</p>
          </div>
          <div className="qrs-why-choose-grid">
            {reasonsToChooseQrs.map((reason, index) => (
              <article className="qrs-why-choose-card" key={reason.number} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qrs-services" id="services" aria-labelledby="services-title">
          <div className="qrs-services-heading" data-reveal>
            <div>
              <span className="qrs-section-kicker">WHAT WE DO</span>
              <h2 id="services-title">Digital services built around your next step.</h2>
            </div>
            <p>Choose the expertise you need now. Each engagement is shaped around your goals, current systems, and customers.</p>
          </div>

          <div className="qrs-service-grid">
            {serviceMenuGroups.map((group, index) => (
              <article className="qrs-service-card" key={group.id} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="qrs-service-image">
                  <ResponsiveImage source={group.image} widths={[480, 768, 1280]} sizes="(max-width: 760px) 100vw, 50vw" alt="" style={{ objectPosition: group.imagePosition }} loading="lazy" />
                </div>
                <div className="qrs-service-card-body">
                  <span>0{index + 1} · {group.eyebrow}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.services.slice(0, 3).map((service) => <li key={service}><Check size={14} aria-hidden="true" /> {service}</li>)}
                  </ul>
                  <a href={`/services/${group.id}`}>Explore {group.title} <ArrowRight size={15} aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="qrs-projects" id="projects" aria-labelledby="projects-title">
          <div className="qrs-projects-heading" data-reveal>
            <div>
              <span className="qrs-section-kicker">OUR PROJECTS</span>
              <h2 id="projects-title">Ideas made useful in the real world.</h2>
            </div>
            <p>From a first concept to a connected digital system, our projects bring together strategy, design, and delivery around a practical business goal.</p>
          </div>
          <div className="qrs-project-grid">
            {projects.map((project) => (
              <article className="qrs-project-card" key={project.number} data-reveal style={{ transitionDelay: `${Number(project.number) * 90}ms` }}>
                <div className={`qrs-project-visual qrs-project-visual--${project.visual}`} aria-hidden="true">
                  <span className="qrs-project-window-dot" /><span className="qrs-project-window-dot" /><span className="qrs-project-window-dot" />
                  <div className="qrs-project-ui"><i /><i /><i /><b /></div>
                </div>
                <div className="qrs-project-card-body">
                  <span>{project.number} · {project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <a href="/book-a-demo" className="qrs-projects-link" data-reveal>Schedule a project meeting <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>

        <section className="qrs-reviews" id="reviews" aria-labelledby="reviews-title" data-reveal>
          <div className="qrs-reviews-heading">
            <div>
              <span className="qrs-section-kicker">CLIENT FEEDBACK</span>
              <h2 id="reviews-title">Collaboration built around real progress.</h2>
            </div>
            <p>A rotating review layout ready for approved QRS client feedback. Replace these sample cards with real testimonials before launch.</p>
          </div>
          <div className="qrs-review-grid" aria-label="Client review carousel">
            {visibleReviews.map((review) => (
              <article className="qrs-review-card" key={review.id}>
                <div className="qrs-review-rating" aria-label={`Sample rating: ${review.rating} out of 5`}>
                  <span>{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" aria-hidden="true" />)}</span>
                  <b>{review.rating} / 5</b>
                </div>
                <p>“{review.quote}”</p>
                <footer><strong>Sample review {review.id}</strong><span>{review.focus}</span></footer>
              </article>
            ))}
          </div>
          <div className="qrs-review-controls" aria-label="Review carousel controls">
            {reviews.map((review, index) => (
              <button key={review.id} type="button" onClick={() => setActiveReview(index)} className={index === activeReview ? "is-active" : ""} aria-label={`Show review set starting with ${index + 1}`} aria-current={index === activeReview ? "true" : undefined} />
            ))}
          </div>
        </section>

        <section className="qrs-cta" aria-labelledby="qrs-cta-title" data-reveal>
          <div>
            <span className="qrs-section-kicker">LET&apos;S BUILD THE RIGHT NEXT STEP</span>
            <h2 id="qrs-cta-title">Ready to turn an idea into progress?</h2>
            <p>Tell us about your goal, challenge, or opportunity. QRS will help you define a practical way forward.</p>
          </div>
          <a href="/book-a-demo" className="qrs-button qrs-button--light">Schedule Meeting <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>
      </main>

      <AgencyFooter />
      <WhatsAppLeadBar />
    </div>
  );
}
