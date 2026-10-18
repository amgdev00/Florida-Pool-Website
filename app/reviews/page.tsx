import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Customer Reviews \u2014 Florida Pool Co." };

export default function Page() {
  return (
    <div id="page-reviews" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › Reviews"}</div>
          <h1>{"Customer Reviews — Florida Pool Co."}</h1>
          <p>{"What South Florida homeowners say about our pool service. Real customers, real results."}</p>
          <a className="btn btn-primary" href="https://share.google/j7F00HBP1K6OQptaM" target="_blank" rel="noopener noreferrer"><Icon name="star" />{" See Our Google Reviews"}</a>
        </div>
      </div>
      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container">
          <div className="reviews-stats">
            <div className="review-stat">
              <div className="big-num">{"5.0"}</div>
              <div style={{ "color": "var(--gold)", "fontSize": "1.2rem" }}><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p>{"Average Rating"}</p>
            </div>
            <div className="review-stat">
              <div className="big-num">{"Google"}</div>
              <p>{"Verified Reviews"}</p>
            </div>
            <div className="review-stat">
              <div className="big-num">{"100%"}</div>
              <p>{"Licensed & Insured"}</p>
            </div>
          </div>
          <div className="center" style={{ "marginBottom": "48px" }}>
            <div className="section-label">{"Customer Testimonials"}</div>
            <h2 className="section-title">{"What Our "}<span className="highlight">{"Customers Say"}</span></h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Finally found a reliable pool company in Coral Springs. They show up every week, my pool has never looked better, and I always get a photo update. Couldn't be happier.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"M"}</div><div><div className="reviewer-name">{"Maria S."}</div><div className="reviewer-loc">{"Coral Springs, FL"}</div></div></div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"My pool was completely green. Florida Pool Co. had it crystal clear in under a week. Amazing results and they communicated with me every step of the way. Highly recommend.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"R"}</div><div><div className="reviewer-name">{"Robert T."}</div><div className="reviewer-loc">{"Boca Raton, FL"}</div></div></div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Professional, on time, fair pricing. I've tried three other companies and none of them come close. Florida Pool Co. is the real deal for Fort Lauderdale pool service.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"J"}</div><div><div className="reviewer-name">{"Jennifer L."}</div><div className="reviewer-loc">{"Fort Lauderdale, FL"}</div></div></div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Great service in Parkland. They showed up on time, did a thorough job, and the pool looks fantastic. Best pool company we've used since moving to South Florida.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"D"}</div><div><div className="reviewer-name">{"David & Susan K."}</div><div className="reviewer-loc">{"Parkland, FL"}</div></div></div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Fast response, professional team, and my pool is sparkling clean every week. The photo updates are a great touch — I always know the job got done right.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"L"}</div><div><div className="reviewer-name">{"Laura M."}</div><div className="reviewer-loc">{"Deerfield Beach, FL"}</div></div></div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Referred Florida Pool Co. to my neighbors in Lighthouse Point and they love them too. Honest pricing, great results, and the most reliable pool service we've ever had.\""}</p>
              <div className="reviewer"><div className="reviewer-avatar">{"C"}</div><div><div className="reviewer-name">{"Carlos V."}</div><div className="reviewer-loc">{"Lighthouse Point, FL"}</div></div></div>
            </div>
          </div>
          <div className="center" style={{ "marginTop": "48px", "padding": "32px", "background": "rgba(245,166,35,0.08)", "border": "1px dashed var(--gold)", "borderRadius": "16px" }}>
            <p style={{ "color": "var(--gold)", "fontWeight": "700", "marginBottom": "12px" }}><Icon name="camera" />{" Add Real Google Review Screenshots Here"}</p>
            <p style={{ "color": "#5a7090", "fontSize": "0.9rem", "marginBottom": "20px" }}>{"Replace the placeholder reviews above with screenshots or embeds of your actual Google reviews. A screenshot of your Google Business Profile with star ratings works great here."}</p>
            <a className="btn btn-primary" href="https://share.google/j7F00HBP1K6OQptaM" target="_blank" rel="noopener noreferrer">{"View on Google →"}</a>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{"Join Our Happy Customers"}</h2>
          <p>{"Get your free pool inspection and experience the Florida Pool Co. difference."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule My Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
