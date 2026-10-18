import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Get Your Free Pool Inspection" };

export default function Page() {
  return (
    <div id="page-contact" className="page">
      <div className="inner-hero">
        <div className="inner-hero-content">
          <div className="breadcrumb"><Link href="/">{"Home"}</Link>{" › Contact"}</div>
          <h1>{"Get Your Free Pool Inspection"}</h1>
          <p>{"Ready to get started? Fill out the form below or give us a call. We'll respond within 24 hours to schedule your free inspection."}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{"Let's Talk About Your Pool"}</h2>
              <p>{"Whether you need weekly service, a green pool fixed, equipment repaired, or just want to know your options — we're here to help with no pressure."}</p>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="phone" /></div>
                <div><strong>{"Call or Text"}</strong><a href="tel:5616464886">{"(561) 646-4886"}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="mail" /></div>
                <div><strong>{"Email Us"}</strong><a href="mailto:contact@floridapoolco.com">{"contact@floridapoolco.com"}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="message" /></div>
                <div><strong>{"WhatsApp"}</strong><a href="https://wa.me/15616464886" target="_blank" rel="noopener noreferrer">{"Message us on WhatsApp"}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="pin" /></div>
                <div><strong>{"Service Area"}</strong><a>{"Coral Springs, Boca Raton, Deerfield Beach, Lighthouse Point, Parkland, Fort Lauderdale & Broward County"}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="camera" /></div>
                <div><strong>{"Instagram"}</strong><a href="https://www.instagram.com/floridapoolco/" target="_blank" rel="noopener noreferrer">{"@floridapoolco"}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Icon name="star" /></div>
                <div><strong>{"Google Business"}</strong><a href="https://share.google/j7F00HBP1K6OQptaM" target="_blank" rel="noopener noreferrer">{"Find Us on Google"}</a></div>
              </div>
              <div style={{ "marginTop": "32px", "background": "linear-gradient(135deg,var(--navy),var(--blue))", "borderRadius": "20px", "padding": "28px", "color": "var(--white)" }}>
                <h4 style={{ "fontFamily": "'Barlow Condensed',sans-serif", "fontSize": "1.4rem", "fontWeight": "900", "color": "var(--aqua)", "marginBottom": "12px" }}>{"Free Inspection Includes:"}</h4>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "0.88rem" }}><span style={{ "color": "var(--aqua)" }}><Icon name="check" /></span>{" Full water chemistry analysis"}</div>
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "0.88rem" }}><span style={{ "color": "var(--aqua)" }}><Icon name="check" /></span>{" Equipment condition check"}</div>
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "0.88rem" }}><span style={{ "color": "var(--aqua)" }}><Icon name="check" /></span>{" Clear written recommendation"}</div>
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "0.88rem" }}><span style={{ "color": "var(--aqua)" }}><Icon name="check" /></span>{" No-obligation quote"}</div>
                  <div style={{ "display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "0.88rem" }}><span style={{ "color": "var(--aqua)" }}><Icon name="check" /></span>{" 100% free — no credit card needed"}</div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm className="contact-form" style={{ "maxWidth": "100%" }} data-contact-form="contact">
                <h3>{"Request Your Free Pool Inspection"}</h3>
                <p>{"Complete the form and we'll contact you within 24 hours to confirm your inspection time."}</p>
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
                    <label>{"Service Needed *"}</label>
                    <select name="service" aria-label="Service" required>
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
                    <label>{"Tell Us About Your Pool"}</label>
                    <textarea placeholder="Pool size, current issues, special requests, or anything else we should know..." name="message" aria-label="Message" maxLength={4000}></textarea>
                  </div>
                </div>
                <button className="btn btn-primary form-submit" type="submit"><Icon name="search" />{" Schedule My Free Inspection"}</button>
                <p style={{ "fontSize": "0.75rem", "color": "var(--gray)", "textAlign": "center", "marginTop": "16px" }}>{"We'll call or text you within 24 hours. No commitment required."}</p>
                <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>

              </ContactForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
