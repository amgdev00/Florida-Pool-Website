import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Lighthouse Point, FL" };

export default function Page() {
  return (
    <div id="page-lighthouse" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Lighthouse Point"}</div>
          <h1>{"Pool Cleaning & Pool Service in Lighthouse Point, FL"}</h1>
          <p>{"Expert pool service for Lighthouse Point's waterfront homes and communities. Weekly maintenance, equipment care, and green pool recovery — done right."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Lighthouse Point"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Lighthouse Point"}</div>
              <h2 className="section-title">{"Pool Service for "}<span className="highlight">{"Lighthouse Point"}</span></h2>
              <p className="section-sub">{"Lighthouse Point's beautiful waterway community and waterfront properties create unique pool maintenance needs. Boat traffic, salt air, and South Florida's climate all affect pool water and equipment."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"Florida Pool Co. serves homeowners throughout Lighthouse Point with professional weekly pool maintenance, chemical balancing, and equipment service. We treat your pool like it's our own."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Lighthouse Point Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Waterfront-specific water chemistry care"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Filter cleaning & equipment service"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool remodeling & upgrades"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Lighthouse Point"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Lighthouse Point Pool Owners — Start Today"}</h2>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
