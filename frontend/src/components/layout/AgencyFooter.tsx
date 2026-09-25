"use client";

import { MouseEvent, useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { Brand } from "@/src/components/brand/Brand";
import { phoneHref, qrsSite, whatsappHref } from "@/src/config/site";
import { claimMailSendPermission } from "@/src/lib/mailRateLimit";
import "@/src/features/home/styles/footer.css";

export function AgencyFooter() {
  const [mailLimitMessage, setMailLimitMessage] = useState("");
  const { contact, social } = qrsSite;

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const permission = claimMailSendPermission();
    if (!permission.allowed) {
      event.preventDefault();
      setMailLimitMessage(permission.message);
    }
  };

  return (
    <footer className="vx-agency-footer" id="contact">
      <div className="vx-agency-footer-inner">
        <div className="vx-agency-footer-grid">
          <div className="vx-footer-col-contact">
            <div style={{ marginBottom: "18px" }}><Brand /></div>
            <span className="lead-text">Have a business challenge?</span>
            <h3 className="main-text">Let&apos;s talk.</h3>

            <div className="vx-footer-contact-info">
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="vx-footer-contact-link" onClick={handleEmailClick}>
                  <Mail size={16} /> {contact.email}
                </a>
              ) : <p className="vx-footer-contact-pending">Use the enquiry form to start a conversation.</p>}
              {contact.primaryPhone && (
                <a href={phoneHref(contact.primaryPhone)} className="vx-footer-contact-link">
                  <Phone size={16} /> {contact.primaryPhone}
                </a>
              )}
              {contact.secondaryPhone && (
                <a href={phoneHref(contact.secondaryPhone)} className="vx-footer-contact-link">
                  <Phone size={16} /> {contact.secondaryPhone}
                </a>
              )}
              {contact.whatsappNumber && (
                <a href={whatsappHref(contact.whatsappNumber)} className="vx-footer-contact-link" target="_blank" rel="noopener noreferrer">
                  <Phone size={16} /> WhatsApp QRS
                </a>
              )}
              {mailLimitMessage && <p role="status">{mailLimitMessage}</p>}
            </div>

            <div className="vx-footer-social-icons">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="vx-footer-social-btn" aria-label="QRS Technologies on Instagram"><Instagram size={16} /></a>
              {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="vx-footer-social-btn" aria-label="QRS Technologies on LinkedIn"><Linkedin size={16} /></a>}
              {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="vx-footer-social-btn" aria-label="QRS Technologies on Facebook"><Facebook size={16} /></a>}
              {social.youtube && <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="vx-footer-social-btn" aria-label="QRS Technologies on YouTube"><Youtube size={16} /></a>}
            </div>
          </div>

          <div className="vx-footer-col">
            <h4>Development</h4>
            <ul>
              <li><a href="/services/development">Web &amp; App Engineering</a></li>
              <li><a href="/services/development">AI Product Development</a></li>
              <li><a href="/services/development">API &amp; Systems Integration</a></li>
              <li><a href="/services/development">Cloud &amp; DevOps</a></li>
            </ul>
          </div>

          <div className="vx-footer-col">
            <h4>AI Automation</h4>
            <ul>
              <li><a href="/services/ai-automation">Workflow Automation</a></li>
              <li><a href="/services/ai-automation">AI Agents &amp; Copilots</a></li>
              <li><a href="/services/ai-automation">Process Intelligence</a></li>
              <li><a href="/services/ai-automation">Document Intelligence</a></li>
            </ul>
          </div>

          <div className="vx-footer-col">
            <h4>Marketing &amp; SEO</h4>
            <ul>
              <li><a href="/services/marketing-seo">Technical SEO</a></li>
              <li><a href="/services/marketing-seo">Performance Marketing</a></li>
              <li><a href="/services/marketing-seo">Growth Strategy</a></li>
            </ul>
          </div>

          <div className="vx-footer-col">
            <h4>Product Design</h4>
            <ul>
              <li><a href="/services/design">UX &amp; UI Design</a></li>
              <li><a href="/services/design">Design Systems</a></li>
              <li><a href="/services/design">Interactive Prototypes</a></li>
            </ul>
          </div>
        </div>

        <div className="vx-footer-copyright-bar">
          <span>© {new Date().getFullYear()} {qrsSite.legalName}. All rights reserved.</span>
          <div className="vx-footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AgencyFooter;
