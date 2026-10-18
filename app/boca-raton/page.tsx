import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Cleaning & Pool Service in Boca Raton, FL" };

export default function Page() {
  return (
    <div id="page-boca-raton" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/areas">{"Service Areas"}</Link>{" › Boca Raton"}</div>
          <h1>{"Pool Cleaning & Pool Service in Boca Raton, FL"}</h1>
          <p>{"Premium pool maintenance for Boca Raton's discerning homeowners. Weekly service, green pool recovery, and equipment care from licensed professionals."}</p>
          <Link className="btn btn-gold" href="/contact">{"Get a Free Inspection in Boca Raton"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Serving Boca Raton"}</div>
              <h2 className="section-title">{"Premium Pool Service for "}<span className="highlight">{"Boca Raton"}</span></h2>
              <p className="section-sub">{"Boca Raton homeowners expect the best — and that's exactly what Florida Pool Co. delivers. Professional pool care that matches the standard of your home."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"From luxury estates in Boca West and Broken Sound to family homes in Mission Bay and Woodfield, we provide consistent, professional pool service throughout Boca Raton and Palm Beach County."}</p>
              <p style={{ "color": "#5a7090", "marginTop": "16px", "lineHeight": "1.7" }}>{"Boca's proximity to the coast and South Florida's subtropical climate make chemical balance and weekly maintenance essential for pristine pool water year-round."}</p>
              <div style={{ "marginTop": "32px" }}>
                <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Boca Raton Pool Services"}</h3>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Weekly pool cleaning & maintenance"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Chemical balancing & water testing"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Green pool recovery treatment"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Filter cleaning & inspection"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool equipment repair & replacement"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="check" /></span><p>{"Pool remodeling & upgrades"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Get Free Inspection in Boca Raton"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Boca Raton Pool Owners — Start with a Free Inspection"}</h2>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
