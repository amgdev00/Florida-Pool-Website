import { Icon } from "@/components/icon";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Florida Pool Co." };

export default function Page() {
  return (
    <div id="page-about" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › About"}</div>
          <h1>{"About Florida Pool Co."}</h1>
          <p>{"South Florida's reliable pool service company. Built on a commitment to professional service, clear communication, and pools that homeowners are proud of."}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="about-img">
                <Image src="/images/pool_family.png" alt="Family enjoying a sunny afternoon in a clear backyard swimming pool" loading="lazy" decoding="async" style={{ "width": "100%", "height": "auto", "display": "block" }} width={1122} height={1402} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div>
              <div className="section-label">{"Our Story"}</div>
              <h2 className="section-title">{"A Pool Company Built on "}<span className="highlight">{"Trust & Results"}</span></h2>
              <p style={{ "color": "#5a7090", "lineHeight": "1.8", "marginBottom": "16px" }}>{"Florida Pool Co. was founded to solve a problem every South Florida homeowner knows too well: pool companies that don't show up, don't communicate, and don't deliver consistent results."}</p>
              <p style={{ "color": "#5a7090", "lineHeight": "1.8", "marginBottom": "16px" }}>{"We built our business differently. Every service visit is completed to a professional standard. Every customer gets a photo update. Every pool gets the attention it deserves — because your pool is an investment in your home and your family's enjoyment."}</p>
              <p style={{ "color": "#5a7090", "lineHeight": "1.8", "marginBottom": "32px" }}>{"We're a local South Florida company serving Coral Springs, Boca Raton, Deerfield Beach, Lighthouse Point, Parkland, Fort Lauderdale, and the surrounding communities — and we plan to be here for the long term, building relationships and delivering results our customers can count on."}</p>
              <div className="values-grid">
                <div className="value-item"><div className="value-icon"><Icon name="target" /></div><div><strong>{"Results-Focused"}</strong><p>{"We measure our success by how good your pool looks every week."}</p></div></div>
                <div className="value-item"><div className="value-icon"><Icon name="phone" /></div><div><strong>{"Always Responsive"}</strong><p>{"Questions, issues, or requests — we respond fast and clearly."}</p></div></div>
                <div className="value-item"><div className="value-icon"><Icon name="shield" /></div><div><strong>{"Licensed & Insured"}</strong><p>{"Full protection for you and your property on every job."}</p></div></div>
                <div className="value-item"><div className="value-icon"><Icon name="handshake" /></div><div><strong>{"Honest & Transparent"}</strong><p>{"Clear quotes, honest assessments, no surprise charges."}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Ready to Work with a Pool Team You Can Trust?"}</h2>
          <p>{"Start with a free pool inspection — no obligation, no pressure. Just honest, professional service."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule My Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
