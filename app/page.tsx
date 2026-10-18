import { Icon } from "@/components/icon";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Crystal Clear Pools. Zero Stress." };

export default function Page() {
  return (
    <div id="page-home" className="page">


      <section className="hero-v2" id="hero">
        <div className="hero-v2-bg" style={{ "backgroundImage": "url('/images/pool-70d7d90275c5.png')" }}></div>
        <div className="hero-v2-overlay"></div>
        <div className="hero-v2-content">

          <div className="hero-v2-left">
            <div className="hero-v2-badge">{"\n          Licensed & Insured  •  Reliable Weekly Service\n        "}</div>
            <h1 className="hero-v2-headline">{"\n          Crystal Clear Pools."}<br />
              <span className="hero-v2-accent">{"Zero Stress."}</span>
            </h1>
            <p className="hero-v2-sub">{"\n          Professional Pool Cleaning, Maintenance & Repairs"}<br />{"\n          Serving South Florida homeowners. We keep your pool sparkling clean,\n          balanced, and swim-ready year-round.\n        "}</p>
            <ul className="hero-v2-features">
              <li><span className="hv2-check"><Icon name="check" /></span>{" Weekly Pool Service"}</li>
              <li><span className="hv2-check"><Icon name="check" /></span>{" Chemical Balancing"}</li>
              <li><span className="hv2-check"><Icon name="check" /></span>{" Equipment Repairs"}</li>
              <li><span className="hv2-check"><Icon name="check" /></span>{" Filter Cleaning"}</li>
              <li><span className="hv2-check"><Icon name="check" /></span>{" Pool Remodeling"}</li>
              <li><span className="hv2-check"><Icon name="check" /></span>{" Free Pool Inspection"}</li>
            </ul>
            <div className="hero-v2-ctas">
              <a className="hv2-btn-primary" href="#hero-form">{"Get Free Quote"}</a>
              <a className="hv2-btn-secondary" href="tel:5616464886">{"Call Now"}</a>
            </div>
            <div className="hero-v2-trust">
              <span><Icon name="star" />{" 5-Star Rated"}</span>
              <span><Icon name="shield" />{" Licensed & Insured"}</span>
              <span><Icon name="pin" />{" South Florida"}</span>
              <span><Icon name="phone" />{" (561) 646-4886"}</span>
            </div>
          </div>

          <div className="hero-v2-right" id="hero-form">
            <ContactForm className="hero-v2-form-card" data-contact-form="quote">
              <h3 className="hv2-form-title">{"Get a Free Pool Quote"}</h3>
              <p className="hv2-form-sub">{"Fill out the form and we'll contact you shortly."}</p>
              <div className="hv2-field">
                <input type="text" placeholder="Full Name" className="hv2-input" name="name" aria-label="Name" required maxLength={120} />
              </div>
              <div className="hv2-field">
                <input type="tel" placeholder="Phone Number" className="hv2-input" name="phone" aria-label="Phone" required maxLength={40} />
              </div>
              <div className="hv2-field">
                <input type="email" placeholder="Email Address" className="hv2-input" name="email" aria-label="Email" maxLength={254} />
              </div>
              <div className="hv2-field">
                <input type="text" placeholder="City or ZIP Code" className="hv2-input" name="city" aria-label="City" required maxLength={120} />
              </div>
              <div className="hv2-field">
                <select className="hv2-input" name="service" aria-label="Service" required>
                  <option value="">{"Service Needed"}</option>
                  <option>{"Weekly Pool Service"}</option>
                  <option>{"Green Pool Cleanup"}</option>
                  <option>{"Pool Equipment Repair"}</option>
                  <option>{"Filter Cleaning"}</option>
                  <option>{"Salt System Service"}</option>
                  <option>{"Pool Remodeling"}</option>
                  <option>{"Pool Inspection"}</option>
                </select>
              </div>
              <div className="hv2-checkbox">
                <input type="checkbox" id="hv2-agree" name="consent" aria-label="Consent" required />
                <label htmlFor="hv2-agree">{"I agree to be contacted regarding my quote request."}</label>
              </div>
              <button className="hv2-submit" type="submit">{"Get My Free Quote →"}</button>
              <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>

            </ContactForm>
          </div>
        </div>
      </section>


      <section style={{ "background": "var(--offwhite)", "padding": "80px 24px" }}>
        <div className="container">
          <div className="center">
            <div className="section-label">{"Our Work"}</div>
            <h2 className="section-title">{"Professional Pool Care, "}<span className="highlight">{"Real Results"}</span></h2>
            <p className="section-sub">{"Every pool we service gets the same attention to detail — clean water, balanced chemistry, and a team that takes pride in the work."}</p>
          </div>
          <div style={{ "display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "20px", "marginTop": "48px" }}>
            <div style={{ "borderRadius": "20px", "overflow": "hidden", "position": "relative", "aspectRatio": "4/3", "boxShadow": "0 8px 40px rgba(13,45,107,0.12)", "cursor": "pointer", "transition": "transform 0.3s" }} className="work-photo">
              <Image src="/images/pool-98095a77d73c.png" alt="Florida Pool Co. technician cleaning pool" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center top", "display": "block" }} loading="lazy" decoding="async" width={820} height={614} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ "position": "absolute", "bottom": "0", "left": "0", "right": "0", "background": "linear-gradient(transparent,rgba(10,22,40,0.88))", "padding": "20px 16px" }}>
                <h4 style={{ "color": "#fff", "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "1.1rem", "fontWeight": "900" }}>{"Professional Weekly Service"}</h4>
                <p style={{ "color": "rgba(255,255,255,0.65)", "fontSize": "0.78rem", "marginTop": "4px" }}>{"Consistent care, every visit"}</p>
              </div>
            </div>
            <div style={{ "borderRadius": "20px", "overflow": "hidden", "position": "relative", "aspectRatio": "4/3", "boxShadow": "0 8px 40px rgba(13,45,107,0.12)", "cursor": "pointer", "transition": "transform 0.3s" }} className="work-photo">
              <Image src="/images/pool-54834147b263.png" alt="Crystal clear pool South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} loading="lazy" decoding="async" width={1535} height={1024} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ "position": "absolute", "bottom": "0", "left": "0", "right": "0", "background": "linear-gradient(transparent,rgba(10,22,40,0.88))", "padding": "20px 16px" }}>
                <h4 style={{ "color": "#fff", "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "1.1rem", "fontWeight": "900" }}>{"Crystal Clear Results"}</h4>
                <p style={{ "color": "rgba(255,255,255,0.65)", "fontSize": "0.78rem", "marginTop": "4px" }}>{"Balanced water, every single visit"}</p>
              </div>
            </div>
            <div style={{ "borderRadius": "20px", "overflow": "hidden", "position": "relative", "aspectRatio": "4/3", "boxShadow": "0 8px 40px rgba(13,45,107,0.12)", "cursor": "pointer", "transition": "transform 0.3s" }} className="work-photo">
              <Image src="/images/pool-4734939f0303.png" alt="Luxury pool South Florida Florida Pool Co." style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} loading="lazy" decoding="async" width={1536} height={1024} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{ "position": "absolute", "bottom": "0", "left": "0", "right": "0", "background": "linear-gradient(transparent,rgba(10,22,40,0.88))", "padding": "20px 16px" }}>
                <h4 style={{ "color": "#fff", "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "1.1rem", "fontWeight": "900" }}>{"Professional Equipment"}</h4>
                <p style={{ "color": "rgba(255,255,255,0.65)", "fontSize": "0.78rem", "marginTop": "4px" }}>{"Right tools, right results — every time"}</p>
              </div>
            </div>
          </div>
          <div style={{ "marginTop": "20px", "borderRadius": "20px", "overflow": "hidden", "position": "relative", "height": "320px", "boxShadow": "0 8px 40px rgba(13,45,107,0.12)" }}>
            <Image src="/images/pool-7fa031c4c330.png" alt="Crystal clear pool water South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center 60%", "display": "block" }} loading="lazy" decoding="async" width={1536} height={1024} sizes="(max-width: 768px) 100vw, 50vw" />
            <div style={{ "position": "absolute", "inset": "0", "background": "linear-gradient(90deg,rgba(10,22,40,0.65) 0%,transparent 60%)" }}></div>
            <div style={{ "position": "absolute", "top": "50%", "left": "40px", "transform": "translateY(-50%)" }}>
              <p style={{ "color": "var(--aqua)", "fontSize": "0.78rem", "fontWeight": "700", "letterSpacing": "3px", "textTransform": "uppercase", "marginBottom": "12px" }}>{"Year-Round Service"}</p>
              <h3 style={{ "color": "#fff", "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "2.2rem", "fontWeight": "900", "lineHeight": "1.1", "marginBottom": "20px" }}>{"Your Pool, Beautiful"}<br />{"Every Single Week."}</h3>
              <Link className="btn btn-primary" style={{ "fontSize": "0.9rem", "padding": "14px 28px" }} href="/contact">{"Get Free Inspection"}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="problem-section">
        <div className="problem-grid">
          <div>
            <div className="section-label">{"Sound Familiar?"}</div>
            <h2 className="section-title">{"Is Your Pool Giving You "}<span className="highlight">{"Headaches?"}</span></h2>
            <p className="section-sub">{"South Florida's heat, humidity, and heavy rains create unique challenges. Most pool owners deal with these problems every season."}</p>
            <div className="problem-list">
              <div className="problem-item">
                <div className="problem-icon"><Icon name="algae" /></div>
                <div><strong>{"Green, Cloudy Water"}</strong><p>{"Algae takes over fast in South Florida heat. One missed service can turn your pool green within days."}</p></div>
              </div>
              <div className="problem-item">
                <div className="problem-icon"><Icon name="flask" /></div>
                <div><strong>{"Chemical Imbalance"}</strong><p>{"Wrong pH and chlorine levels make swimming unsafe and damage your pool equipment and surfaces."}</p></div>
              </div>
              <div className="problem-item">
                <div className="problem-icon"><Icon name="gear" /></div>
                <div><strong>{"Equipment Failures"}</strong><p>{"Pumps, filters, and salt systems that aren't maintained regularly fail unexpectedly — and expensively."}</p></div>
              </div>
              <div className="problem-item">
                <div className="problem-icon"><Icon name="dislike" /></div>
                <div><strong>{"Unreliable Pool Companies"}</strong><p>{"No-shows, poor communication, and inconsistent service leave your pool looking neglected."}</p></div>
              </div>
            </div>
          </div>
          <div>
            <div className="solution-box">
              <h3>{"Florida Pool Co. Makes It Simple."}</h3>
              <p style={{ "color": "rgba(255,255,255,0.65)", "fontSize": "0.9rem", "marginBottom": "24px", "lineHeight": "1.7" }}>{"We show up every week, communicate clearly, and deliver the clean, healthy pool you deserve. No excuses."}</p>
              <div className="solution-point"><span className="check"><Icon name="check" /></span><p><strong>{"Weekly scheduled service"}</strong>{" — same day, every week"}</p></div>
              <div className="solution-point"><span className="check"><Icon name="check" /></span><p><strong>{"Professional chemical balancing"}</strong>{" — safe water every time"}</p></div>
              <div className="solution-point"><span className="check"><Icon name="check" /></span><p><strong>{"Photo updates"}</strong>{" after every service visit"}</p></div>
              <div className="solution-point"><span className="check"><Icon name="check" /></span><p><strong>{"Green pool recovery"}</strong>{" — we fix it fast"}</p></div>
              <div className="solution-point"><span className="check"><Icon name="check" /></span><p><strong>{"Licensed & Insured"}</strong>{" — South Florida local company"}</p></div>
              <div style={{ "marginTop": "28px" }}>
                <Link className="btn btn-gold" href="/contact">{"Get My Free Inspection →"}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ba-section">
        <div className="container">
          <div className="center">
            <div className="section-label" style={{ "borderColor": "rgba(245,166,35,0.4)", "color": "var(--gold)", "background": "rgba(245,166,35,0.1)" }}>{"Real Results"}</div>
            <h2 className="section-title" style={{ "color": "var(--white)" }}>{"See the "}<span style={{ "color": "var(--aqua)" }}>{"Transformation"}</span></h2>
            <p className="section-sub" style={{ "color": "rgba(255,255,255,0.6)" }}>{"Photos and videos from real Florida Pool Co. service visits. This is what professional pool care looks like."}</p>
          </div>
          <div className="ba-grid">
            <div className="ba-card" style={{ "flex": "0 0 280px", "width": "280px", "minWidth": "280px" }}>
              <div style={{ "position": "relative", "width": "100%", "height": "200px", "overflow": "hidden" }}>
                <Image src="/images/pool-44a98223d9b5.png" alt="Green pool recovery before and after South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block" }} loading="lazy" decoding="async" width={1536} height={1024} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,0,0,0.65)", "color": "#fff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"BEFORE"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "right": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,196,232,0.45)", "color": "#00e5ff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"AFTER"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "bottom": "0", "left": "50%", "width": "3px", "background": "#f5a623", "transform": "translateX(-50%)", "zIndex": "2" }}></div>
              </div>
              <div className="ba-info"><h4>{"Green to Crystal Clear"}</h4>
                <p>{"Full green pool recovery — Coral Springs"}</p>
              </div>
            </div>
            <div className="ba-card" style={{ "flex": "0 0 280px", "width": "280px", "minWidth": "280px" }}>
              <div style={{ "position": "relative", "width": "100%", "height": "200px", "overflow": "hidden" }}>
                <Image src="/images/pool-79afffac87ff.png" alt="Weekly pool maintenance before and after South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block" }} loading="lazy" decoding="async" width={1402} height={1122} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,0,0,0.65)", "color": "#fff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"BEFORE"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "right": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,196,232,0.45)", "color": "#00e5ff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"AFTER"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "bottom": "0", "left": "50%", "width": "3px", "background": "#f5a623", "transform": "translateX(-50%)", "zIndex": "2" }}></div>
              </div><div className="ba-info"><h4>{"Weekly Maintenance Results"}</h4>
                <p>{"Regular service — Boca Raton"}</p>
              </div>
            </div>
            <div className="ba-card" style={{ "flex": "0 0 280px", "width": "280px", "minWidth": "280px" }}>
              <div style={{ "position": "relative", "width": "100%", "height": "200px", "overflow": "hidden" }}>
                <Image src="/images/pool-043e2affae32.png" alt="Pool filter cleaning before and after South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block" }} loading="lazy" decoding="async" width={1402} height={1122} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,0,0,0.65)", "color": "#fff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"BEFORE"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "right": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,196,232,0.45)", "color": "#00e5ff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"AFTER"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "bottom": "0", "left": "50%", "width": "3px", "background": "#f5a623", "transform": "translateX(-50%)", "zIndex": "2" }}></div>
              </div>
              <div className="ba-info">
                <h4>{"Filter Cleaning Improvement"}</h4>
                <p>{"Filter deep clean — Fort Lauderdale"}</p>
              </div>
            </div>
            <div className="ba-card" style={{ "flex": "0 0 280px", "width": "280px", "minWidth": "280px" }}>
              <div style={{ "position": "relative", "width": "100%", "height": "200px", "overflow": "hidden" }}>
                <Image src="/images/pool-8b57adae6404.png" alt="Pool equipment upgrade before and after South Florida" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "center", "display": "block" }} loading="lazy" decoding="async" width={1402} height={1122} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ "position": "absolute", "top": "0", "left": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,0,0,0.65)", "color": "#fff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"BEFORE"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "right": "0", "bottom": "0", "width": "50%", "display": "flex", "alignItems": "flex-start", "justifyContent": "flex-end", "padding": "10px" }}>
                  <span style={{ "background": "rgba(0,196,232,0.45)", "color": "#00e5ff", "fontSize": "0.65rem", "fontWeight": "700", "padding": "4px 10px", "borderRadius": "50px", "letterSpacing": "1.5px", "textTransform": "uppercase" }}>{"AFTER"}</span>
                </div>
                <div style={{ "position": "absolute", "top": "0", "bottom": "0", "left": "50%", "width": "3px", "background": "#f5a623", "transform": "translateX(-50%)", "zIndex": "2" }}></div>
              </div>
              <div className="ba-info">
                <h4>{"Pool Equipment Upgrade"}</h4>
                <p>{"Pump & motor replacement — Parkland"}</p>
              </div>
            </div>
          </div>
          <div className="center mt-48">
            <Link className="btn btn-gold" href="/gallery">{"View Full Before & After Gallery →"}</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ "background": "var(--white)" }}>
        <div className="container">
          <div className="center">
            <div className="section-label">{"What We Do"}</div>
            <h2 className="section-title">{"Professional "}<span className="highlight">{"Pool Services"}</span></h2>
            <p className="section-sub">{"From weekly maintenance to full green pool recovery, we have everything your South Florida pool needs to stay beautiful year-round."}</p>
          </div>
          <div className="services-grid">
            <Link className="service-card" href="/weekly">
              <div className="service-icon"><Icon name="waves" /></div>
              <h3>{"Weekly Pool Cleaning"}</h3>
              <p>{"Consistent, professional weekly service including skimming, brushing, vacuuming, and chemical balancing. Your pool, on a schedule you can count on."}</p>
              <span className="card-link">{"Learn More →"}</span>
            </Link>
            <Link className="service-card" href="/green">
              <div className="service-icon"><Icon name="algae" /></div>
              <h3>{"Green Pool Recovery"}</h3>
              <p>{"Got a green pool? We'll turn it crystal clear. Our proven recovery process eliminates algae and restores safe, balanced water fast."}</p>
              <span className="card-link">{"Learn More →"}</span>
            </Link>
            <Link className="service-card" href="/equipment">
              <div className="service-icon"><Icon name="gear" /></div>
              <h3>{"Equipment Repair"}</h3>
              <p>{"Pumps, motors, filters, salt systems, heaters — we diagnose and repair pool equipment to keep your system running efficiently."}</p>
              <span className="card-link">{"Learn More →"}</span>
            </Link>
            <Link className="service-card" href="/remodeling">
              <div className="service-icon"><Icon name="construction" /></div>
              <h3>{"Pool Remodeling"}</h3>
              <p>{"Ready for a pool upgrade? From resurfacing to new tile, lighting, and features — we transform outdated pools into stunning backyard retreats."}</p>
              <span className="card-link">{"Learn More →"}</span>
            </Link>
            <div className="service-card">
              <div className="service-icon"><Icon name="test-tube" /></div>
              <h3>{"Chemical Balancing"}</h3>
              <p>{"Precise chemical testing and treatment to keep your water safe, clear, and perfectly balanced for swimmers of all ages."}</p>
              <Link className="card-link" href="/services">{"Learn More →"}</Link>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="wrench" /></div>
              <h3>{"Filter Cleaning"}</h3>
              <p>{"Clean filters mean better circulation and healthier water. We clean and inspect your filter system to maintain peak performance."}</p>
              <Link className="card-link" href="/services">{"Learn More →"}</Link>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="salt" /></div>
              <h3>{"Salt System Maintenance"}</h3>
              <p>{"Salt chlorinators need regular care. We inspect, clean, and calibrate your salt system to keep it producing the right chlorine levels."}</p>
              <Link className="card-link" href="/services">{"Learn More →"}</Link>
            </div>
            <div className="service-card">
              <div className="service-icon"><Icon name="bolt" /></div>
              <h3>{"One-Time Service / Shock"}</h3>
              <p>{"Need a quick fix before a party or after a long closure? Our one-time service gets your pool guest-ready fast."}</p>
              <Link className="card-link" href="/contact">{"Request Now →"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container">
          <div className="center">
            <div className="section-label">{"Why Florida Pool Co."}</div>
            <h2 className="section-title">{"The Local "}<span className="highlight">{"Pool Team"}</span>{" That Actually Shows Up"}</h2>
            <p className="section-sub">{"We built this company on a simple promise: professional service, reliable scheduling, and pools that homeowners are proud of."}</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><Icon name="calendar" /></div>
              <h4>{"Reliable Scheduling"}</h4>
              <p>{"Same day, same time every week. We show up when we say we will — no excuses, no surprises."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Icon name="smartphone" /></div>
              <h4>{"Clear Communication"}</h4>
              <p>{"You get photo updates after every visit. Always know exactly what we did and how your pool looks."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Icon name="trophy" /></div>
              <h4>{"Professional Results"}</h4>
              <p>{"We take pride in every pool we service. Clean, clear, and properly balanced every single visit."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Icon name="palm" /></div>
              <h4>{"South Florida Experts"}</h4>
              <p>{"We know South Florida pools — the climate, the algae pressure, the equipment, and what works here."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Icon name="shield" /></div>
              <h4>{"Licensed & Insured"}</h4>
              <p>{"Fully licensed and insured for your protection. Work done right, the professional way."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Icon name="wallet" /></div>
              <h4>{"Fair, Transparent Pricing"}</h4>
              <p>{"No hidden fees. Clear quotes before any work begins. You always know what you're paying for."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="center">
            <div className="section-label" style={{ "borderColor": "rgba(0,196,232,0.3)", "color": "var(--aqua)" }}>{"Simple Process"}</div>
            <h2 className="section-title" style={{ "color": "var(--white)" }}>{"Getting Started Is "}<span style={{ "color": "var(--aqua)" }}>{"Easy"}</span></h2>
            <p className="section-sub" style={{ "color": "rgba(255,255,255,0.6)" }}>{"Three steps to a clean, safe, beautiful pool — and we handle everything in between."}</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">{"1"}</div>
              <h3>{"Request Your Free Inspection"}</h3>
              <p>{"Call, text, or fill out our quick form. We'll schedule a free on-site pool inspection at your convenience — no commitment required."}</p>
            </div>
            <div className="process-step">
              <div className="step-num">{"2"}</div>
              <h3>{"Get a Clear Recommendation"}</h3>
              <p>{"After the inspection, we'll give you a straight, honest assessment and a clear quote for exactly what your pool needs."}</p>
            </div>
            <div className="process-step">
              <div className="step-num">{"3"}</div>
              <h3>{"Enjoy a Beautiful Pool"}</h3>
              <p>{"We handle everything. You relax. Your pool stays clean, safe, and beautiful all year long — guaranteed."}</p>
            </div>
          </div>
          <div className="center mt-48 process-actions">
            <Link className="btn btn-primary" href="/contact">{"Start with a Free Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" (561) 646-4886"}</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container">
          <div className="center">
            <div className="section-label">{"Customer Reviews"}</div>
            <h2 className="section-title">{"What South Florida "}<span className="highlight">{"Homeowners Say"}</span></h2>
            <p className="section-sub">{"Real feedback from our customers. We let results speak for themselves."}</p>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Finally found a reliable pool company in Coral Springs. They show up every week, my pool has never looked better, and I always get a photo update after the visit.\""}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{"M"}</div>
                <div><div className="reviewer-name">{"Maria S."}</div><div className="reviewer-loc">{"Coral Springs, FL"}</div></div>
              </div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"My pool was completely green after the rainy season. Florida Pool Co. had it crystal clear in less than a week. Incredible results and great communication throughout.\""}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{"R"}</div>
                <div><div className="reviewer-name">{"Robert T."}</div><div className="reviewer-loc">{"Boca Raton, FL"}</div></div>
              </div>
            </div>
            <div className="review-card">
              <div className="stars"><span className="rating-icons" role="img" aria-label="5 out of 5 stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span></div>
              <p className="review-text">{"\"Professional, punctual, and fair pricing. I've tried three other pool companies in Fort Lauderdale and none of them come close to Florida Pool Co. Highly recommend.\""}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{"J"}</div>
                <div><div className="reviewer-name">{"Jennifer L."}</div><div className="reviewer-loc">{"Fort Lauderdale, FL"}</div></div>
              </div>
            </div>
          </div>
          <div className="center mt-48">
            <a className="btn btn-primary" href="https://share.google/j7F00HBP1K6OQptaM" target="_blank" rel="noopener noreferrer"><Icon name="star" />{" View All Google Reviews"}</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ "background": "var(--white)" }}>
        <div className="container">
          <div className="center">
            <div className="section-label">{"Where We Serve"}</div>
            <h2 className="section-title">{"Pool Service Across "}<span className="highlight">{"South Florida"}</span></h2>
            <p className="section-sub">{"We provide professional pool service throughout Broward County and Palm Beach County."}</p>
          </div>
          <div className="cities-grid">
            <Link className="city-card" href="/coral-springs">
              <div className="city-icon"><Icon name="palm" /></div>
              <h3>{"Coral Springs"}</h3>
              <p>{"Weekly service & green pool recovery"}</p>
              <span className="city-link">{"Pool Service in Coral Springs →"}</span>
            </Link>
            <Link className="city-card" href="/boca-raton">
              <div className="city-icon"><Icon name="waves" /></div>
              <h3>{"Boca Raton"}</h3>
              <p>{"Premium pool care for Boca homes"}</p>
              <span className="city-link">{"Pool Service in Boca Raton →"}</span>
            </Link>
            <Link className="city-card" href="/deerfield">
              <div className="city-icon"><Icon name="beach" /></div>
              <h3>{"Deerfield Beach"}</h3>
              <p>{"Coastal pool maintenance experts"}</p>
              <span className="city-link">{"Pool Service in Deerfield Beach →"}</span>
            </Link>
            <Link className="city-card" href="/lighthouse">
              <div className="city-icon"><Icon name="bulb" /></div>
              <h3>{"Lighthouse Point"}</h3>
              <p>{"Professional waterway pool care"}</p>
              <span className="city-link">{"Pool Service in Lighthouse Point →"}</span>
            </Link>
            <Link className="city-card" href="/parkland">
              <div className="city-icon"><Icon name="leaf" /></div>
              <h3>{"Parkland"}</h3>
              <p>{"Trusted pool care for Parkland families"}</p>
              <span className="city-link">{"Pool Service in Parkland →"}</span>
            </Link>
            <Link className="city-card" href="/fort-lauderdale">
              <div className="city-icon"><Icon name="anchor" /></div>
              <h3>{"Fort Lauderdale"}</h3>
              <p>{"Broward County pool professionals"}</p>
              <span className="city-link">{"Pool Service in Fort Lauderdale →"}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ "background": "var(--offwhite)" }}>
        <div className="container">
          <ContactForm className="contact-form" data-contact-form="home">
            <h3>{"Get Your Free Pool Inspection"}</h3>
            <p>{"Fill out the form and we'll contact you within 24 hours to schedule your free inspection. No commitment required."}</p>
            <div className="form-grid">
              <div className="form-group">
                <label>{"First & Last Name *"}</label>
                <input type="text" placeholder="Your full name" name="name" aria-label="Name" required maxLength={120} />
              </div>
              <div className="form-group">
                <label>{"Phone Number *"}</label>
                <input type="tel" placeholder="(561) 000-0000" name="phone" aria-label="Phone" required maxLength={40} />
              </div>
              <div className="form-group">
                <label>{"Email Address"}</label>
                <input type="email" placeholder="your@email.com" name="email" aria-label="Email" maxLength={254} />
              </div>
              <div className="form-group">
                <label>{"Your City *"}</label>
                <select name="city" aria-label="City" required>
                  <option value="">{"Select your city..."}</option>
                  <option>{"Coral Springs"}</option>
                  <option>{"Boca Raton"}</option>
                  <option>{"Deerfield Beach"}</option>
                  <option>{"Lighthouse Point"}</option>
                  <option>{"Parkland"}</option>
                  <option>{"Fort Lauderdale"}</option>
                  <option>{"Other / Nearby area"}</option>
                </select>
              </div>
              <div className="form-group full">
                <label>{"Service Needed"}</label>
                <select name="service" aria-label="Service">
                  <option value="">{"What can we help you with?"}</option>
                  <option>{"Weekly Pool Cleaning & Maintenance"}</option>
                  <option>{"Green Pool Recovery"}</option>
                  <option>{"Chemical Balancing"}</option>
                  <option>{"Filter Cleaning"}</option>
                  <option>{"Equipment Repair"}</option>
                  <option>{"Salt System Maintenance"}</option>
                  <option>{"Pool Remodeling"}</option>
                  <option>{"One-Time Service / Shock Treatment"}</option>
                  <option>{"Free Inspection Only"}</option>
                </select>
              </div>
              <div className="form-group full">
                <label>{"Message (optional)"}</label>
                <textarea placeholder="Tell us about your pool or any specific concerns..." name="message" aria-label="Message" maxLength={4000}></textarea>
              </div>
            </div>
            <button className="btn btn-primary form-submit" type="submit"><Icon name="search" />{" Schedule My Free Inspection"}</button>
            <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>

          </ContactForm>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{"Ready for a Pool That Looks Good Every Week?"}</h2>
          <p>{"Join South Florida homeowners who trust Florida Pool Co. for clean, safe, beautiful pools all year round."}</p>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">{"Schedule My Free Pool Inspection"}</Link>
            <a className="btn btn-secondary" href="tel:5616464886"><Icon name="phone" />{" Call (561) 646-4886"}</a>
            <a className="btn btn-secondary" href="https://wa.me/15616464886" target="_blank" rel="noopener noreferrer"><Icon name="message" />{" WhatsApp Us"}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
