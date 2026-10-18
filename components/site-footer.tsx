import { Icon } from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (<>
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="logo" href="/">
            <Image className="logo-img" src="/images/pool-6c67a6aabfa6.png" alt="Florida Pool Co. Logo" style={{ "height": "58px", "width": "58px", "objectFit": "contain", "filter": "drop-shadow(0 0 8px rgba(0,196,232,0.4))" }} loading="eager" decoding="async" width={1342} height={1196} sizes="58px" />
            <div className="logo-text">
              <strong>{"FLORIDA POOL CO."}</strong>
              <span>{"Professional Pool Service"}</span>
            </div>
          </Link>
          <p>{"South Florida's trusted pool service company. Licensed, insured, and committed to keeping your pool crystal clear all year long."}</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/floridapoolco/" target="_blank" title="Instagram" aria-label="Instagram" rel="noopener noreferrer"><Icon name="instagram" /></a>
            <a href="https://share.google/j7F00HBP1K6OQptaM" target="_blank" title="Google Reviews" aria-label="Google Reviews" rel="noopener noreferrer"><Icon name="star" /></a>
            <a href="https://wa.me/15616464886" target="_blank" title="WhatsApp" aria-label="WhatsApp" rel="noopener noreferrer"><Icon name="message" /></a>
            <a href="tel:5616464886" title="Call Us" aria-label="Call Us"><Icon name="phone" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{"Services"}</h4>
          <Link href="/weekly">{"Weekly Pool Cleaning"}</Link>
          <Link href="/green">{"Green Pool Recovery"}</Link>
          <Link href="/equipment">{"Equipment Repair"}</Link>
          <Link href="/remodeling">{"Pool Remodeling"}</Link>
          <Link href="/services">{"All Services"}</Link>
        </div>
        <div className="footer-col">
          <h4>{"Service Areas"}</h4>
          <Link href="/coral-springs">{"Coral Springs"}</Link>
          <Link href="/boca-raton">{"Boca Raton"}</Link>
          <Link href="/deerfield">{"Deerfield Beach"}</Link>
          <Link href="/lighthouse">{"Lighthouse Point"}</Link>
          <Link href="/parkland">{"Parkland"}</Link>
          <Link href="/fort-lauderdale">{"Fort Lauderdale"}</Link>
        </div>
        <div className="footer-col">
          <h4>{"Contact"}</h4>
          <div className="footer-contact-item">
            <span className="icon"><Icon name="phone" /></span>
            <a href="tel:5616464886">{"(561) 646-4886"}</a>
          </div>
          <div className="footer-contact-item">
            <span className="icon"><Icon name="mail" /></span>
            <a href="mailto:contact@floridapoolco.com">{"contact@floridapoolco.com"}</a>
          </div>
          <div className="footer-contact-item">
            <span className="icon"><Icon name="pin" /></span>
            <span style={{ "fontSize": "0.85rem", "color": "rgba(255,255,255,0.5)" }}>{"Serving South Florida"}</span>
          </div>
          <div style={{ "marginTop": "16px" }}>
            <Link className="btn btn-primary" style={{ "fontSize": "0.82rem", "padding": "12px 20px" }} href="/contact">{"Get Free Inspection"}</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{"© 2025 Florida Pool Co. | Licensed & Insured | Serving South Florida"}</p>
        <div className="footer-links">
          <Link href="/about">{"About"}</Link>
          <Link href="/contact">{"Contact"}</Link>
          <Link href="/reviews">{"Reviews"}</Link>
        </div>
      </div>
    </footer><div className="sticky-mobile">
      <a className="s-call" href="tel:5616464886"><Icon name="phone" />{" Call Now"}</a>
      <a className="s-whatsapp" href="https://wa.me/15616464886" target="_blank" rel="noopener noreferrer"><Icon name="message" />{" WhatsApp"}</a>
      <Link className="s-quote" href="/contact"><Icon name="search" />{" Free Inspection"}</Link>
    </div>
  </>);
}
