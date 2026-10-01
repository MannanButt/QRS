import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { AgencyFooter } from "@/src/components/layout/AgencyFooter";
import { qrsSite } from "@/src/config/site";
import { ServicePageHeader } from "@/src/features/services/components/ServicePageHeader";
import "@/src/features/company/styles/company.css";

const principles = [
  { title: "Clarity before complexity", copy: "We find the right problem and the clearest next step before adding tools, features, or processes." },
  { title: "Technology in service of people", copy: "Every experience and system is shaped around the people who will use it, manage it, and benefit from it." },
  { title: "Progress you can measure", copy: "We stay focused on useful outcomes, meaningful signals, and work your team can build on." },
] as const;

const capabilities = [
  { number: "01", title: "Build", copy: "Websites, mobile apps, WordPress and WooCommerce stores, and connected digital products that are clear, fast, and ready to grow." },
  { number: "02", title: "Get found", copy: "Google Business Profile, SEO, AEO, and AIO work that helps the right people discover, understand, and choose your business." },
  { number: "03", title: "Grow", copy: "Marketing strategy, paid campaigns, social media, and measurement that connect attention to meaningful business outcomes." },
] as const;

const teams = [
  { role: "Founder", focus: "Vision & business direction", copy: "Sets the long-term direction for QRS and keeps every engagement grounded in the outcomes that matter to clients." },
  { role: "CEO", focus: "Client success & delivery", copy: "Leads the work from strategy through delivery, making sure the right people, priorities, and decisions stay connected." },
  { role: "Development Team", focus: "Web, mobile & commerce", copy: "Engineers useful digital products, mobile applications, WordPress builds, and e-commerce experiences with care and rigor." },
  { role: "SEO, AEO & AIO Team", focus: "Search visibility", copy: "Improves how your business appears across local search, search engines, answer engines, and AI-led discovery." },
  { role: "Marketing Team", focus: "Campaigns & growth", copy: "Plans and runs social, paid, and content activity that earns attention and turns it into qualified action." },
] as const;

export function AboutCompanyPage() {
  return (
    <div className="qrs-content-page">
      <ServicePageHeader />
      <main>
        <section className="qrs-content-hero qrs-content-hero--about">
          <div className="qrs-content-shell">
            <span className="qrs-section-kicker">ABOUT QRS TECHNOLOGIES</span>
            <h1>Technology that gives businesses a clearer way forward.</h1>
            <p>QRS Technologies brings strategy, design, engineering, automation, and growth together to help businesses move from ambition to practical progress.</p>
          </div>
        </section>

        <section className="qrs-content-section qrs-about-intro">
          <div>
            <span className="qrs-section-kicker">OUR APPROACH</span>
            <h2>A capable digital partner, built around your real-world goals.</h2>
          </div>
          <div className="qrs-about-intro-copy">
            <p>We work alongside teams that want better digital experiences, more efficient operations, and dependable growth. Our role is to make the next move easier to see, plan, and deliver.</p>
            <ul>
              <li><Check size={17} aria-hidden="true" />Practical strategy, not generic recommendations</li>
              <li><Check size={17} aria-hidden="true" />Connected delivery across product, marketing, and technology</li>
              <li><Check size={17} aria-hidden="true" />Clear handover and support for long-term progress</li>
            </ul>
          </div>
        </section>

        <section className="qrs-about-capabilities" aria-labelledby="capabilities-title">
          <div className="qrs-content-shell">
            <div className="qrs-about-capabilities-heading">
              <div>
                <span className="qrs-section-kicker">WHAT WE DO</span>
                <h2 id="capabilities-title">One partner across the work that moves your business forward.</h2>
              </div>
              <p>We connect the digital disciplines that are often treated separately, so every decision supports a clearer customer experience and stronger commercial result.</p>
            </div>
            <div className="qrs-about-capabilities-grid">
              {capabilities.map((capability) => (
                <article key={capability.number}>
                  <span>{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qrs-about-location" aria-labelledby="about-location-title">
          <div className="qrs-content-shell qrs-about-location-grid">
            <div>
              <span className="qrs-section-kicker">WHERE WE ARE</span>
              <h2 id="about-location-title">Rooted in Lahore. Ready for the next opportunity.</h2>
              <p>QRS Technologies is based in Lahore, Pakistan. Our local presence gives clients a practical point of connection, while our way of working is built for businesses wherever their next move takes them.</p>
              <a href="/contact" className="qrs-about-location-link">Contact QRS <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <a href={qrsSite.location.mapHref} target="_blank" rel="noopener noreferrer" className="qrs-about-location-card">
              <MapPin size={28} aria-hidden="true" />
              <span>OUR OFFICE</span>
              <strong>{qrsSite.location.address}</strong>
              <em>Open in Google Maps <ArrowUpRight size={15} aria-hidden="true" /></em>
            </a>
          </div>
        </section>

        <section className="qrs-about-teams" aria-labelledby="teams-title">
          <div className="qrs-content-shell">
            <div className="qrs-about-teams-heading">
              <div>
                <span className="qrs-section-kicker">OUR TEAM</span>
                <h2 id="teams-title">Specialists working as one focused team.</h2>
              </div>
              <p>From leadership through delivery, every role has a clear purpose: make the work easier to understand, deliver, and improve.</p>
            </div>
            <div className="qrs-about-teams-grid">
              {teams.map((team, index) => (
                <article key={team.role}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{team.role}</h3>
                  <strong>{team.focus}</strong>
                  <p>{team.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qrs-principles" aria-labelledby="principles-title">
          <div className="qrs-content-shell">
            <span className="qrs-section-kicker">WHAT GUIDES US</span>
            <h2 id="principles-title">How we make the work useful.</h2>
            <div className="qrs-principles-grid">
              {principles.map((principle, index) => (
                <article key={principle.title}>
                  <span>0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qrs-content-cta">
          <div>
            <span className="qrs-section-kicker">START A CONVERSATION</span>
            <h2>Have a goal that needs a clearer plan?</h2>
            <p>Tell us what you are building, improving, or growing, and we will help you identify a practical next step.</p>
          </div>
          <a href="/book-a-demo" className="qrs-content-cta-link">Schedule Meeting <ArrowUpRight size={17} aria-hidden="true" /></a>
        </section>
      </main>
      <AgencyFooter />
    </div>
  );
}

const articles = [
  {
    category: "Search visibility",
    title: "Building a local search foundation customers can trust.",
    copy: "A practical view of the details that make Google Business Profile, SEO, and helpful customer information work together.",
  },
  {
    category: "Digital growth",
    title: "From attention to action: planning more useful paid campaigns.",
    copy: "How clearer offers, channel-fit creative, and good measurement make social and PPC activity easier to improve.",
  },
  {
    category: "Product delivery",
    title: "What to decide before building a mobile app or online store.",
    copy: "The questions that help teams choose the right scope, platform, and customer experience before development begins.",
  },
] as const;

export function BlogsPage() {
  return (
    <div className="qrs-content-page">
      <ServicePageHeader />
      <main>
        <section className="qrs-content-hero qrs-content-hero--blogs">
          <div className="qrs-content-shell">
            <span className="qrs-section-kicker">QRS INSIGHTS</span>
            <h1>Useful thinking for businesses moving forward.</h1>
            <p>Practical perspectives on digital products, automation, search visibility, e-commerce, and sustainable growth.</p>
          </div>
        </section>

        <section className="qrs-blog-section" aria-labelledby="blog-list-title">
          <div className="qrs-content-shell">
            <div className="qrs-blog-heading">
              <div>
                <span className="qrs-section-kicker">LATEST ARTICLES</span>
                <h2 id="blog-list-title">Ideas for your next digital move.</h2>
              </div>
              <p>New QRS articles will appear here. These starter topics set the direction for the insights hub.</p>
            </div>
            <div className="qrs-blog-grid">
              {articles.map((article, index) => (
                <article className="qrs-blog-card" key={article.title}>
                  <span>0{index + 1} · {article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.copy}</p>
                  <a href="/book-a-demo">Talk to QRS <ArrowUpRight size={15} aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qrs-content-cta">
          <div>
            <span className="qrs-section-kicker">KEEP THE CONVERSATION GOING</span>
            <h2>Need advice specific to your business?</h2>
            <p>We can help you turn a question, challenge, or opportunity into a practical plan.</p>
          </div>
          <a href="/book-a-demo" className="qrs-content-cta-link">Schedule Meeting <ArrowUpRight size={17} aria-hidden="true" /></a>
        </section>
      </main>
      <AgencyFooter />
    </div>
  );
}
