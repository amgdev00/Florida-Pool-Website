import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Coral Springs, FL" };

export default function Page() {
  return (
    <div id="page-coral-springs" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Coral Springs"}</div>
          <h1>{"Pool Cleaning & Pool Service in Coral Springs, FL"}</h1>
          <p>{"Professional weekly pool maintenance, green pool recovery, and equipment repair for Coral Springs homeowners. Local, licensed, and reliable."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Coral Springs"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Coral Springs"}</div>
              <h2 className="section-title">{"Expert Pool Service for "}<span className="highlight">{"Coral Springs"}</span>{" Homeowners"}</h2>
              <p className="section-sub">{"Coral Springs is one of Broward County's most desirable communities — and its warm year-round climate means pools need professional, consistent care to stay clean and healthy."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"South Florida's summer heat and heavy rains create ideal conditions for rapid algae growth. Without weekly professional service, pools in Coral Springs can turn green in just days. We provide the consistent care your pool needs to stay crystal clear all year long."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"We serve neighborhoods throughout Coral Springs including Eagle Trace, Wyndham Lakes, Heron Bay, Turtle Run, and surrounding communities."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Coral Springs Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Chemical balancing & water testing"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Filter cleaning & inspection"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Salt system maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool equipment repair"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"One-time service & shock treatment"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Coral Springs"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Coral Springs Pool Owners — Get a Free Inspection"}</h2>
          <p>{"We're locally based and ready to serve your Coral Springs home. No obligation, no pressure."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
