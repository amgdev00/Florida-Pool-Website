import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Fort Lauderdale, FL" };

export default function Page() {
  return (
    <div id="page-fort-lauderdale" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Fort Lauderdale"}</div>
          <h1>{"Pool Cleaning & Pool Service in Fort Lauderdale, FL"}</h1>
          <p>{"Professional pool maintenance for Fort Lauderdale homeowners. Weekly service, green pool recovery, and equipment repair across Broward County's largest city."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Fort Lauderdale"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Fort Lauderdale"}</div>
              <h2 className="section-title">{"Broward County's Trusted "}<span className="highlight">{"Pool Professionals"}</span></h2>
              <p className="section-sub">{"Fort Lauderdale's warm waterway city is home to thousands of residential pools — and they all need professional, consistent care to stay clean and inviting."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"We service pools throughout Fort Lauderdale including Las Olas, Victoria Park, Wilton Manors, Oakland Park, Lauderdale-by-the-Sea, and surrounding neighborhoods throughout Broward County."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"Fort Lauderdale's subtropical climate with heavy summer rains and intense heat makes weekly pool maintenance essential for algae prevention and safe water chemistry all year round."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Fort Lauderdale Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Chemical balancing & water testing"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Filter cleaning & inspection"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Salt system maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool equipment repair & replacement"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool remodeling & upgrades"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Fort Lauderdale"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Fort Lauderdale Pool Owners — Get Started Today"}</h2>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
