import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Professional Pool Services in South Florida" };

export default function Page() {
  return (
    <div id="page-services" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › Services"}</div>
          <h1>{"Professional Pool Services in South Florida"}</h1>
          <p>{"From routine weekly maintenance to full equipment repair and pool remodeling, Florida Pool Co. handles every aspect of your pool care."}</p>
          <Link className="btn btn-primary" href="/contact">{"Get a Free Pool Inspection"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <Link className="service-card" href="/weekly">
              <div className="service-icon"><Icon name="waves" /></div>
              <h3>{"Weekly Pool Cleaning & Maintenance"}</h3>
              <p>{"Full weekly service: skimming, brushing, vacuuming, chemical testing and balancing, equipment check. Consistent results, every visit."}</p>
              <span className="card-link">{"View Service Details →"}</span>
            </Link>
            <Link className="service-card" href="/green">
              <div className="service-icon"><Icon name="algae" /></div>
              <h3>{"Green Pool Recovery"}</h3>
              <p>{"Aggressive algae treatment and water restoration. We'll have your green pool crystal clear and swim-ready in days, not weeks."}</p>
              <span className="card-link">{"View Service Details →"}</span>
            </Link>
            <Link className="service-card" href="/equipment">
              <div className="service-icon"><Icon name="gear" /></div>
              <h3>{"Pool Equipment Repair"}</h3>
              <p>{"Pumps, motors, filters, heaters, salt cells, automation systems. We diagnose and repair equipment to keep your pool running right."}</p>
              <span className="card-link">{"View Service Details →"}</span>
            </Link>
            <Link className="service-card" href="/remodeling">
              <div className="service-icon"><Icon name="construction" /></div>
              <h3>{"Pool Remodeling & Upgrades"}</h3>
              <p>{"Resurfacing, new tile and coping, lighting upgrades, water features, automation. Transform your pool into a backyard showpiece."}</p>
              <span className="card-link">{"View Service Details →"}</span>
            </Link>
            <div className="service-card">
              <div className="service-icon"><Icon name="test-tube" /></div>
              <h3>{"Chemical Balancing"}</h3>
              <p>{"Precise water testing and treatment. We balance pH, chlorine, alkalinity, and stabilizer for safe, clear, comfortable swimming water."}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="wrench" /></div>
              <h3>{"Filter Cleaning"}</h3>
              <p>{"Sand, cartridge, and DE filter cleaning and inspection. A clean filter means better circulation, cleaner water, and longer equipment life."}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="salt" /></div>
              <h3>{"Salt System Maintenance"}</h3>
              <p>{"Salt cell inspection, cleaning, and flow switch calibration. We keep your salt chlorinator producing the right amount of sanitizer."}</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="bolt" /></div>
              <h3>{"One-Time Service / Shock"}</h3>
              <p>{"No regular contract required. Need a quick clean and shock before your party or after your pool has been sitting? We've got you."}</p>
              <Link className="card-link" href="/contact">{"Request Now →"}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Not Sure What Your Pool Needs?"}</h2>
          <p>{"Schedule a free inspection. We'll assess your pool and give you an honest recommendation — no pressure."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Get Your Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
