import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = { title: "Green Pool Recovery in South Florida" };

export default function Page() {
  return (
    <div id="page-green" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › "}<Link href="/services">{"Services"}</Link>{" › Green Pool Recovery"}</div>
          <h1>{"Green Pool Recovery in South Florida"}</h1>
          <p>{"We turn green, murky, algae-filled pools back to crystal clear. Fast, professional green pool treatment in Broward County and surrounding areas."}</p>
          <Link className="btn btn-primary" href="/contact">{"Get a Free Pool Inspection"}</Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="section-label">{"Our Green Pool Process"}</div>
              <h2 className="section-title">{"From Green to "}<span className="highlight">{"Crystal Clear"}</span></h2>
              <p className="section-sub">{"A green pool isn't just ugly — it's a health hazard. Algae and bacteria thrive in unbalanced water. We fix it the right way, the first time."}</p>
              <div className="problem-list" style={{ "marginTop": "24px" }}>
                <div className="problem-item"><div className="problem-icon"><Icon name="search" /></div><div><strong>{"Step 1: Full Water Analysis"}</strong><p>{"We test and assess the full chemical profile to understand what's causing the algae bloom."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="pill" /></div><div><strong>{"Step 2: Algaecide & Shock Treatment"}</strong><p>{"Heavy-duty algaecide and chlorine shock applied to kill algae quickly and thoroughly."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="brush" /></div><div><strong>{"Step 3: Brushing & Circulation"}</strong><p>{"Full pool brushing to break up algae colonies and maximize chemical contact throughout the water."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="wrench" /></div><div><strong>{"Step 4: Filter Deep Clean"}</strong><p>{"Your filter is cleaned and inspected to remove trapped algae and restore maximum filtration."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="test-tube" /></div><div><strong>{"Step 5: Chemical Rebalancing"}</strong><p>{"Water fully rebalanced to proper pH, chlorine, alkalinity, and stabilizer levels for long-term clarity."}</p></div></div>
                <div className="problem-item"><div className="problem-icon"><Icon name="circle-check" /></div><div><strong>{"Step 6: Follow-Up Check"}</strong><p>{"We return to verify the pool is fully recovered, clear, and safe for swimming."}</p></div></div>
              </div>
            </div>
            <div>
              <div className="solution-box">
                <h3>{"Is Your Pool Green?"}</h3>
                <p style={{ "color": "rgba(255,255,255,0.65)", "fontSize": "0.9rem", "marginBottom": "24px", "lineHeight": "1.7" }}>{"South Florida's heat and humidity make algae growth almost inevitable without proper maintenance. Here are the signs you need green pool recovery:"}</p>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"Water is green, yellow, or dark brown"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"You can't see the pool floor or steps"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"Algae visible on walls, steps, or floor"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"Strong chemical or swamp-like odor"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"Pool has been closed or neglected"}</p></div>
                <div className="solution-point"><span className="check"><Icon name="algae" /></span><p>{"Previous service attempts haven't worked"}</p></div>
                <div style={{ "marginTop": "28px" }}>
                  <Link className="btn btn-gold" href="/contact">{"Fix My Green Pool Now →"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container center">
          <div className="section-label">{"FAQs"}</div>
          <h2 className="section-title">{"Green Pool "}<span className="highlight">{"Questions Answered"}</span></h2>
        </div>
        <Faq items={[{ "question": "How long does green pool recovery take?", "answer": "Most pools can be recovered in 3-7 days depending on the severity of algae growth. Severely green pools may require multiple treatments. We'll give you a realistic timeline after the initial inspection." }, { "question": "Is it safe to swim in a pool with algae?", "answer": "No. Algae itself isn't always harmful, but the bacteria that thrive alongside it can be dangerous. You should not swim until the pool has been fully treated, cleared, and chemical levels confirmed safe." }, { "question": "Why did my pool turn green so fast?", "answer": "South Florida's year-round heat and heavy summer rains accelerate algae growth dramatically. Missed service, equipment failure, or a sudden chemical imbalance can turn a pool green in as little as 48-72 hours." }, { "question": "Do I need to drain my green pool?", "answer": "In most cases, no. We can recover most green pools without draining. Extreme cases with very high phosphates or cyanuric acid levels may require a partial drain, which we'll clearly communicate upfront." }]} />
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Don't Wait — Algae Gets Worse Every Day"}</h2>
          <p>{"Call us now or request an inspection. The sooner we get to your pool, the easier and less costly the recovery."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Fix My Green Pool"}</Link>
            <a className="btn btn-red" href="tel:5616464886"><Icon name="phone" />{" Call Now: (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
