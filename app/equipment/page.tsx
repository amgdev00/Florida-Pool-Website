import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pool Equipment Repair in South Florida" };

export default function Page() {
  return (
    <div id="page-equipment" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/services">{"Services"}</Link>{" › Equipment Repair"}</div>
          <h1>{"Pool Equipment Repair in South Florida"}</h1>
          <p>{"Expert diagnosis and repair for pumps, motors, filters, salt systems, heaters, and automation. Keep your pool running efficiently all year long."}</p>
          <Link className="btn btn-primary" href="/contact">{"Request a Quote"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="center">
            <div className="section-label">{"Equipment We Service"}</div>
            <h2 className="section-title">{"We Repair & Service All "}<span className="highlight">{"Pool Equipment"}</span></h2>
          </div>
          <div className="services-grid" style={{ "marginTop": "40px" }}>
            <div className="service-card"><div className="service-icon"><Icon name="drop" /></div><h3>{"Pool Pumps & Motors"}</h3><p>{"Single-speed, dual-speed, and variable-speed pump repair and replacement. We diagnose pump failures and restore proper water circulation."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="wrench" /></div><h3>{"Filter Systems"}</h3><p>{"Sand, cartridge, and DE filter repair, cleaning, and replacement. Proper filtration is essential for clear, healthy water."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="salt" /></div><h3>{"Salt Chlorinators"}</h3><p>{"Salt cell inspection, cleaning, replacement, and flow switch repair. We keep your salt system producing the right chlorine levels."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="thermometer" /></div><h3>{"Pool Heaters"}</h3><p>{"Gas and heat pump heater diagnosis and repair. Keep your pool comfortable year-round with proper heater maintenance."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="sliders" /></div><h3>{"Automation Systems"}</h3><p>{"Pool automation, timers, and control system troubleshooting and repair. Smart pool control made easy."}</p></div>
            <div className="service-card"><div className="service-icon"><Icon name="bulb" /></div><h3>{"LED Pool Lighting"}</h3><p>{"Pool light replacement, LED upgrades, and underwater lighting installation. Enhance your pool's nighttime beauty."}</p></div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Pool Equipment Not Working Right?"}</h2>
          <p>{"Don't wait for a small issue to become an expensive problem. Call us for a diagnostic visit today."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Request Repair Quote"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
