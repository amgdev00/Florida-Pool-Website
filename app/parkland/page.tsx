import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Parkland, FL" };

export default function Page() {
  return (
    <div id="page-parkland" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Parkland"}</div>
          <h1>{"Pool Cleaning & Pool Service in Parkland, FL"}</h1>
          <p>{"Trusted professional pool service for Parkland families. Weekly maintenance, chemical balancing, and green pool recovery for one of Broward's premier communities."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Parkland"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Parkland"}</div>
              <h2 className="section-title">{"Professional Pool Care for "}<span className="highlight">{"Parkland"}</span>{" Families"}</h2>
              <p className="section-sub">{"Parkland is one of Broward County's most family-friendly communities — and keeping your pool clean and safe is a priority for your family's health and enjoyment."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"We serve Parkland homeowners throughout Heron Bay, Parkland Golf and Country Club, Watercrest, and surrounding neighborhoods with consistent, professional weekly pool service."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"Parkland's lush, tree-lined streets mean pools collect more organic debris — leaves, pollen, and plant matter — that require regular removal to prevent cloudy water and algae growth."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Parkland Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Heavy debris removal & vacuuming"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Chemical balancing & water testing"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Equipment repair & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool remodeling & upgrades"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Parkland"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Parkland Pool Owners — Get a Free Inspection"}</h2>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
