import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AgencyFooter } from "@/src/components/layout/AgencyFooter";
import { phoneHref, qrsSite, whatsappHref } from "@/src/config/site";
import { ServicePageHeader } from "@/src/features/services/components/ServicePageHeader";
import "@/src/features/contact/styles/contact.css";

export default function ContactPage() {
  const { contact, location } = qrsSite;

  return (
    <div className="qrs-contact-page">
      <ServicePageHeader />
      <main>
        <section className="qrs-contact-hero">
          <div className="qrs-contact-shell">
            <span className="qrs-contact-kicker">CONTACT QRS TECHNOLOGIES</span>
            <h1>Let&apos;s turn your next idea into meaningful progress.</h1>
            <p>Whether you need a new digital product, stronger search visibility, or a practical marketing plan, our team is ready to understand the opportunity and help you move forward.</p>
            <div className="qrs-contact-hero-actions">
              <a href="/book-a-demo">Schedule a meeting <ArrowUpRight size={16} aria-hidden="true" /></a>
              {contact.whatsappNumber && <a href={whatsappHref(contact.whatsappNumber)} target="_blank" rel="noopener noreferrer" className="qrs-contact-hero-whatsapp">Chat on WhatsApp <MessageCircle size={16} aria-hidden="true" /></a>}
            </div>
          </div>
        </section>

        <section className="qrs-contact-details" aria-labelledby="contact-details-title">
          <div className="qrs-contact-shell">
            <div className="qrs-contact-section-heading">
              <div>
                <span className="qrs-section-kicker">HOW TO REACH US</span>
                <h2 id="contact-details-title">Start the conversation in the way that works for you.</h2>
              </div>
              <p>Reach out directly, visit our Lahore location, or schedule a focused conversation with the QRS team.</p>
            </div>

            <div className="qrs-contact-card-grid">
              {contact.primaryPhone && (
                <a href={phoneHref(contact.primaryPhone)} className="qrs-contact-card">
                  <span className="qrs-contact-card-icon"><Phone size={21} aria-hidden="true" /></span>
                  <span className="qrs-contact-card-label">Phone</span>
                  <strong>{contact.primaryPhone}</strong>
                  <small>Call our team to discuss your next project.</small>
                </a>
              )}
              {contact.whatsappNumber && (
                <a href={whatsappHref(contact.whatsappNumber)} target="_blank" rel="noopener noreferrer" className="qrs-contact-card">
                  <span className="qrs-contact-card-icon"><MessageCircle size={21} aria-hidden="true" /></span>
                  <span className="qrs-contact-card-label">WhatsApp</span>
                  <strong>0312 4130449</strong>
                  <small>Send a message whenever it is convenient.</small>
                </a>
              )}
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="qrs-contact-card">
                  <span className="qrs-contact-card-icon"><Mail size={21} aria-hidden="true" /></span>
                  <span className="qrs-contact-card-label">Email</span>
                  <strong>{contact.email}</strong>
                  <small>Share a project brief or question with us.</small>
                </a>
              ) : (
                <a href="/book-a-demo" className="qrs-contact-card">
                  <span className="qrs-contact-card-icon"><Mail size={21} aria-hidden="true" /></span>
                  <span className="qrs-contact-card-label">Project enquiry</span>
                  <strong>Tell us what you need</strong>
                  <small>Use our meeting form and the right specialist will follow up.</small>
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="qrs-contact-location" aria-labelledby="location-title">
          <div className="qrs-contact-shell qrs-contact-location-grid">
            <div className="qrs-contact-location-copy">
              <span className="qrs-section-kicker">OUR LOCATION</span>
              <h2 id="location-title">Based in Lahore, built for ambitious businesses everywhere.</h2>
              <p>Our team works from Lahore and partners with businesses that want clear, dependable digital progress. You are welcome to arrange a meeting at our office.</p>
              <a href={location.mapHref} target="_blank" rel="noopener noreferrer" className="qrs-contact-map-link">Open in Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <a href={location.mapHref} target="_blank" rel="noopener noreferrer" className="qrs-contact-address-card" aria-label={`Open ${location.address} in Google Maps`}>
              <MapPin size={28} aria-hidden="true" />
              <span>QRS Technologies</span>
              <strong>{location.address}</strong>
              <small>Lahore, Pakistan</small>
              <em>Get directions <ArrowUpRight size={15} aria-hidden="true" /></em>
            </a>
          </div>
        </section>

        <section className="qrs-contact-company-note">
          <div className="qrs-contact-shell">
            <span>QRS TECHNOLOGIES</span>
            <p>We bring development, search expertise, and marketing together so your next digital investment has a clear strategy, capable delivery, and a measurable path forward.</p>
          </div>
        </section>
      </main>
      <AgencyFooter />
    </div>
  );
}
