import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Service Across South Florida" };

export default function Page() {
  return (
    <div id="page-areas" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › Service Areas"}</div>
          <h1>{"Pool Service Across South Florida"}</h1>
          <p>{"We serve homeowners throughout Broward and Palm Beach County. Find your city below and learn about professional pool service in your area."}</p>
          <Link className="btn btn-primary" href="/contact">{"Get a Free Pool Inspection"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="center">
            <div className="section-label">{"Where We Serve"}</div>
            <h2 className="section-title">{"South Florida "}<span className="highlight">{"Service Areas"}</span></h2>
            <p className="section-sub">{"Professional pool cleaning and maintenance in every city we serve. Click your city for local service details."}</p>
          </div>
          <div className="cities-grid" style={{ "marginTop": "48px" }}>
            <Link className="city-card" href="/coral-springs"><div className="city-icon"><Icon name="palm" /></div><h3>{"Coral Springs"}</h3><p>{"Pool cleaning & green pool recovery"}</p><span className="city-link">{"Pool Service in Coral Springs →"}</span></Link>
            <Link className="city-card" href="/boca-raton"><div className="city-icon"><Icon name="waves" /></div><h3>{"Boca Raton"}</h3><p>{"Premium pool care for Boca homes"}</p><span className="city-link">{"Pool Service in Boca Raton →"}</span></Link>
            <Link className="city-card" href="/deerfield"><div className="city-icon"><Icon name="beach" /></div><h3>{"Deerfield Beach"}</h3><p>{"Coastal pool maintenance experts"}</p><span className="city-link">{"Pool Service in Deerfield Beach →"}</span></Link>
            <Link className="city-card" href="/lighthouse"><div className="city-icon"><Icon name="bulb" /></div><h3>{"Lighthouse Point"}</h3><p>{"Waterway community pool experts"}</p><span className="city-link">{"Pool Service in Lighthouse Point →"}</span></Link>
            <Link className="city-card" href="/parkland"><div className="city-icon"><Icon name="leaf" /></div><h3>{"Parkland"}</h3><p>{"Trusted care for Parkland families"}</p><span className="city-link">{"Pool Service in Parkland →"}</span></Link>
            <Link className="city-card" href="/fort-lauderdale"><div className="city-icon"><Icon name="anchor" /></div><h3>{"Fort Lauderdale"}</h3><p>{"Broward County pool professionals"}</p><span className="city-link">{"Pool Service in Fort Lauderdale →"}</span></Link>
          </div>
          <div style={{ "marginTop": "40px", "background": "var(--offwhite)", "borderRadius": "20px", "padding": "32px", "textAlign": "center" }}>
            <h3 style={{ "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "1.8rem", "fontWeight": "900", "color": "var(--navy)", "marginBottom": "12px" }}>{"Don't See Your City?"}</h3>
            <p style={{ "color": "#5a7090", "marginBottom": "24px" }}>{"We may still serve your area. Call or text us to confirm service availability in your neighborhood."}</p>
            <div style={{ "display": "flex", "gap": "16px", "justifyContent": "center", "flexWrap": "wrap" }}>
              <a className="btn btn-primary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
              <a className="btn btn-secondary" style={{ "color": "var(--navy)", "borderColor": "var(--navy)" }} href="https://wa.me/15616464886" target="_blank" rel="noopener noreferrer"><Icon name="message" />{" WhatsApp Us"}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
