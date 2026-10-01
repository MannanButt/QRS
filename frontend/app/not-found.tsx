import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { qrsSite } from "@/src/config/site";
import { ServicePageHeader } from "@/src/features/services/components/ServicePageHeader";

export default function NotFound() {
  return (
    <div className="ds-not-found-page">
      <ServicePageHeader />

      {/* Main 404 Hero */}
      <main className="ds-not-found-main">
        {/* Glow ambient backgrounds */}
        <div className="ds-not-found-glow ds-not-found-glow--one" />
        <div className="ds-not-found-glow ds-not-found-glow--two" />

        <div className="ds-not-found-copy">
          <div className="ds-not-found-pill">
            <Compass size={16} aria-hidden="true" />
            404 Error — Page Not Found
          </div>

          <h1 className="ds-not-found-title">
            4<span>0</span>4
          </h1>

          <h2 className="ds-not-found-heading">
            This Service Page Does Not Exist Yet
          </h2>

          <p className="ds-not-found-description">
            The page or service you are looking for may have been moved, renamed, or is currently in development.
          </p>

          <div className="ds-not-found-actions">
            <Link
              href="/"
              className="ds-not-found-primary"
            >
              <Home size={16} aria-hidden="true" /> Go to Homepage
            </Link>
            <Link
              href="/services/development"
              className="ds-not-found-secondary"
            >
              Development Services
            </Link>
            <Link
              href="/services/gmb-seo-aeo"
              className="ds-not-found-secondary"
            >
              GMB, SEO & AEO Services
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ds-not-found-footer">
        © {new Date().getFullYear()} {qrsSite.legalName}. {qrsSite.tagline}
      </footer>
    </div>
  );
}
