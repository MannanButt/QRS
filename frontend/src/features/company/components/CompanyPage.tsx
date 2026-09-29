import { ArrowUpRight, Check } from "lucide-react";
import { AgencyFooter } from "@/src/components/layout/AgencyFooter";
import { ServicePageHeader } from "@/src/features/services/components/ServicePageHeader";
import "@/src/features/company/styles/company.css";

const principles = [
  { title: "Clarity before complexity", copy: "We find the right problem and the clearest next step before adding tools, features, or processes." },
  { title: "Technology in service of people", copy: "Every experience and system is shaped around the people who will use it, manage it, and benefit from it." },
  { title: "Progress you can measure", copy: "We stay focused on useful outcomes, meaningful signals, and work your team can build on." },
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
