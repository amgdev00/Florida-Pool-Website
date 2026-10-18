import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Remodeling & Upgrades in South Florida" };

export default function Page() {
  return (
    <div id="page-remodeling" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/services">{"Services"}</Link>{" › Pool Remodeling"}</div>
          <h1>{"Pool Remodeling & Upgrades in South Florida"}</h1>
          <p>{"Transform your outdated pool into a stunning backyard retreat. From resurfacing to new water features, we bring your vision to life."}</p>
          <Link className="btn btn-primary" href="/contact">{"Request a Free Consultation"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="center">
            <div className="section-label">{"Remodeling Services"}</div>
            <h2 className="section-title">{"Everything to "}<span className="highlight">{"Upgrade Your Pool"}</span></h2>
          </div>
          <div className="services-grid" style={{ "marginTop": "40px" }}>
            <div className="service-card"><div className="service-icon"><Icon name="pool" /></div><h3>{"Pool Resurfacing"}</h3><p>{"Plaster, pebble, quartz, or tile finishes. A fresh surface makes your pool look brand new and prevents leaks and rough surfaces."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="tiles" /></div><h3>{"Tile & Coping"}</h3><p>{"Waterline tile replacement and coping upgrades. New tile gives your pool a premium, finished look that stands out."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="bulb" /></div><h3>{"LED Lighting Upgrades"}</h3><p>{"Color-changing LED pool lights that transform your backyard into an evening paradise. Remote-controlled and energy-efficient."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="fountain" /></div><h3>{"Water Features"}</h3><p>{"Waterfalls, fountains, deck jets, and bubblers. Add movement, sound, and visual drama to your pool."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="sliders" /></div><h3>{"Automation & Smart Systems"}</h3><p>{"Control your pool lighting, pump, heater, and features from your smartphone. Modern, convenient, and efficient."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="palm" /></div><h3>{"Deck & Surroundings"}</h3><p>{"Pavers, travertine, and cool deck options to complete your backyard transformation and enhance the entire pool area."}</p></div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Ready to Transform Your Backyard?"}</h2>
          <p>{"Contact us for a free consultation and estimate on your pool remodeling project."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Get a Free Remodeling Estimate"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
