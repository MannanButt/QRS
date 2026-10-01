"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { qrsSite, whatsappHref } from "@/src/config/site";

export function WhatsAppLeadBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const whatsappNumber = qrsSite.contact.whatsappNumber;

  useEffect(() => {
    const hero = document.querySelector(".qrs-hero");
    const footer = document.querySelector(".vx-agency-footer");
    if (!hero || !footer) return;

    const updateVisibility = () => {
      const heroHasPassed = hero.getBoundingClientRect().bottom <= 0;
      const footerHasNotStarted = footer.getBoundingClientRect().top > window.innerHeight;
      setIsVisible(heroHasPassed && footerHasNotStarted);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!whatsappNumber) return null;

  const visible = isVisible && !isDismissed;

  return (
    <aside
      className={`qrs-whatsapp-lead-bar${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      aria-label="WhatsApp contact"
    >
      <div className="qrs-whatsapp-lead-profile" aria-hidden="true">
        <span>QRS</span>
        <i />
      </div>
      <div className="qrs-whatsapp-lead-copy">
        <strong>Need help with your next digital move?</strong>
        <span>Message the QRS team on WhatsApp.</span>
      </div>
      <a
        href={whatsappHref(whatsappNumber)}
        className="qrs-whatsapp-lead-action"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>Chat on WhatsApp</span>
      </a>
      <button
        type="button"
        className="qrs-whatsapp-lead-close"
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss WhatsApp contact bar"
        tabIndex={visible ? 0 : -1}
      >
        <X size={17} aria-hidden="true" />
      </button>
    </aside>
  );
}
