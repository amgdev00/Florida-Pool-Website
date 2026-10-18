import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Deerfield Beach, FL" };

export default function Page() {
  return (
    <div id="page-deerfield" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Deerfield Beach"}</div>
          <h1>{"Pool Cleaning & Pool Service in Deerfield Beach, FL"}</h1>
          <p>{"Professional pool maintenance for Deerfield Beach homeowners. Coastal expertise, weekly service, and green pool recovery from your local pool team."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Deerfield Beach"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Deerfield Beach"}</div>
              <h2 className="section-title">{"Coastal Pool Experts in "}<span className="highlight">{"Deerfield Beach"}</span></h2>
              <p className="section-sub">{"Deerfield Beach's coastal location and tropical climate create unique pool maintenance challenges. Salt air, intense sunlight, and frequent rain affect water chemistry and equipment."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"We service pools throughout Deerfield Beach including The Cove, Deer Creek, Century Village, and surrounding neighborhoods. Our team understands the specific demands of coastal South Florida pool care."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Deerfield Beach Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Coastal water chemistry balancing"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Filter cleaning & inspection"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Salt system maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool equipment repair"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Deerfield Beach"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Deerfield Beach Pool Owners — Free Inspection Available"}</h2>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
