"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { qrsSite, whatsappHref } from "@/src/config/site";

export function WhatsAppLeadBar() {
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
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

  if (!isMounted || !whatsappNumber) return null;

  const visible = isVisible && !isDismissed;

  return createPortal(
    <aside
      className={`qrs-whatsapp-lead-bar${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      aria-label="WhatsApp quick contact"
    >
      <div className="qrs-whatsapp-lead-inner">
        <div className="qrs-whatsapp-lead-profile" aria-hidden="true">
          <span>QRS</span>
          <i />
        </div>
        <div className="qrs-whatsapp-lead-copy">
          <strong>Need help with your next digital project?</strong>
          <span>Chat directly with our specialists on WhatsApp.</span>
        </div>
        <div className="qrs-whatsapp-lead-center">
          <a
            href={whatsappHref(whatsappNumber)}
            className="qrs-whatsapp-lead-action"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? 0 : -1}
          >
            <span className="qrs-gold-shine" aria-hidden="true" />
            <MessageCircle size={17} aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
        <button
          type="button"
          className="qrs-whatsapp-lead-close"
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss WhatsApp contact bar"
          tabIndex={visible ? 0 : -1}
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </aside>,
    document.body,
  );
}
