import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = { title: "Weekly Pool Cleaning & Maintenance South Florida" };

export default function Page() {
  return (
    <div id="page-weekly" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/services">{"Services"}</Link>{" › Weekly Pool Cleaning"}</div>
          <h1>{"Weekly Pool Cleaning & Maintenance South Florida"}</h1>
          <p>{"Professional, reliable weekly pool service for South Florida homeowners. We show up on schedule, do the job right, and send you a photo update after every visit."}</p>
          <Link className="btn btn-primary" href="/contact">{"Get a Free Pool Inspection"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"What's Included"}</div>
              <h2 className="section-title">{"Everything Your Pool Needs, "}<span className="highlight">{"Every Week"}</span></h2>
              <p className="section-sub">{"Each weekly visit covers the full scope of maintenance your South Florida pool requires to stay clean, healthy, and beautiful."}</p>
              <div className="problem-list" style={{ "marginTop": "24px" }}>
                <div className="problem-item"><div className="problem-icon"><Icon name="broom" /></div><div><strong>{"Skimming & Surface Cleaning"}</strong><p>{"Leaves, debris, and insects removed from the water surface and skimmer baskets."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="brush" /></div><div><strong>{"Brushing Walls & Steps"}</strong><p>{"Pool walls, steps, and corners brushed to prevent algae buildup and staining."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="swirl" /></div><div><strong>{"Vacuuming the Pool Floor"}</strong><p>{"Complete bottom vacuuming to remove settled debris and keep water crystal clear."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="test-tube" /></div><div><strong>{"Chemical Testing & Balancing"}</strong><p>{"Water tested and adjusted for pH, chlorine, alkalinity, and stabilizer every visit."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="gear" /></div><div><strong>{"Equipment Inspection"}</strong><p>{"Pump, filter, and equipment checked for proper operation during every visit."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="camera" /></div><div><strong>{"Photo Update After Service"}</strong><p>{"We send you a photo of your clean pool after every single visit. Peace of mind guaranteed."}</p></div></div>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Signs You Need Weekly Service"}</h3>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"Water starts turning cloudy within days"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"Algae appearing on walls or floor"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"Leaves and debris accumulating quickly"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"Chemical levels are hard to keep balanced"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"Your pool is used frequently by family"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="warning" /></span><p>{"You want a pool you don't have to think about"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "0.9rem", "marginBottom": "20px" }}>{"In South Florida's warm climate, pools need consistent weekly attention to stay clean and safe. Skip even one visit and algae can take over within days."}</p>
                  <Link className="btn btn-gold" href="/contact">{"Schedule Weekly Service →"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container center">
          <div className="section-label">{"FAQs"}</div>
          <h2 className="section-title">{"Frequently Asked "}<span className="highlight">{"Questions"}</span></h2>
        </div>
        <Faq items={[{ "question": "What day will you come to service my pool?", "answer": "We schedule your service on a consistent day each week so you always know when to expect us. Your service day is agreed upon when you sign up." }, { "question": "Do I need to be home for pool service?", "answer": "No, you don't need to be home. As long as we have access to your pool, we'll take care of everything and send you a photo update when we're done." }, { "question": "What chemicals are included in weekly service?", "answer": "Standard weekly chemicals including chlorine and pH adjusters are included. Specialty treatments, algaecides, or shock treatments may be quoted separately based on your pool's specific needs." }, { "question": "How do I get started?", "answer": "Simple — request a free pool inspection. We'll come out, assess your pool's condition, and give you a clear quote for weekly service. No commitment required." }, { "question": "Do you service pools in my area?", "answer": "We serve Coral Springs, Boca Raton, Deerfield Beach, Lighthouse Point, Parkland, Fort Lauderdale, and surrounding Broward and Palm Beach County areas. Contact us to confirm your specific address." }]} />
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Ready for Worry-Free Pool Ownership?"}</h2>
          <p>{"Get a free inspection and a clear quote for weekly pool service in your South Florida home."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Get My Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
