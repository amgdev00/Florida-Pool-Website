"use client";

import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header>
      <div className="header-inner">
        <Link className="logo" href="/" onClick={() => setMobileOpen(false)}>

          <Image className="logo-img" src="/images/pool-6c67a6aabfa6.png" alt="Florida Pool Co. Logo" style={{ "height": "58px", "width": "58px", "objectFit": "contain", "filter": "drop-shadow(0 0 8px rgba(0,196,232,0.4))" }} loading="eager" decoding="async" width={1342} height={1196} sizes="58px" />
          <div className="logo-text">
            <strong>{"FLORIDA POOL CO."}</strong>
            <span>{"Professional Pool Service"}</span>
          </div>
        </Link>
        <nav>
          <Link href="/" onClick={() => setMobileOpen(false)} aria-current={pathname === "/" ? "page" : undefined}>{"Home"}</Link>
          <div className="nav-dropdown">
            <Link href="/services" aria-current={pathname === "/services" ? "page" : undefined}>{"Services"}</Link>
            <div className="dropdown-menu">
              <Link href="/services" onClick={() => setMobileOpen(false)} aria-current={pathname === "/services" ? "page" : undefined}>{"All Services"}</Link>
              <Link href="/weekly" onClick={() => setMobileOpen(false)} aria-current={pathname === "/weekly" ? "page" : undefined}>{"Weekly Pool Cleaning"}</Link>
              <Link href="/green" onClick={() => setMobileOpen(false)} aria-current={pathname === "/green" ? "page" : undefined}>{"Green Pool Recovery"}</Link>
              <Link href="/equipment" onClick={() => setMobileOpen(false)} aria-current={pathname === "/equipment" ? "page" : undefined}>{"Equipment Repair"}</Link>
              <Link href="/remodeling" onClick={() => setMobileOpen(false)} aria-current={pathname === "/remodeling" ? "page" : undefined}>{"Pool Remodeling"}</Link>
            </div>
          </div>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} aria-current={pathname === "/gallery" ? "page" : undefined}>{"Gallery"}</Link>
          <div className="nav-dropdown">
            <Link href="/areas" aria-current={pathname === "/areas" ? "page" : undefined}>{"Service Areas"}</Link>
            <div className="dropdown-menu">
              <Link href="/areas" onClick={() => setMobileOpen(false)} aria-current={pathname === "/areas" ? "page" : undefined}>{"All Service Areas"}</Link>
              <Link href="/coral-springs" onClick={() => setMobileOpen(false)} aria-current={pathname === "/coral-springs" ? "page" : undefined}>{"Coral Springs"}</Link>
              <Link href="/boca-raton" onClick={() => setMobileOpen(false)} aria-current={pathname === "/boca-raton" ? "page" : undefined}>{"Boca Raton"}</Link>
              <Link href="/deerfield" onClick={() => setMobileOpen(false)} aria-current={pathname === "/deerfield" ? "page" : undefined}>{"Deerfield Beach"}</Link>
              <Link href="/lighthouse" onClick={() => setMobileOpen(false)} aria-current={pathname === "/lighthouse" ? "page" : undefined}>{"Lighthouse Point"}</Link>
              <Link href="/parkland" onClick={() => setMobileOpen(false)} aria-current={pathname === "/parkland" ? "page" : undefined}>{"Parkland"}</Link>
              <Link href="/fort-lauderdale" onClick={() => setMobileOpen(false)} aria-current={pathname === "/fort-lauderdale" ? "page" : undefined}>{"Fort Lauderdale"}</Link>
            </div>
          </div>
          <Link href="/about" onClick={() => setMobileOpen(false)} aria-current={pathname === "/about" ? "page" : undefined}>{"About"}</Link>
          <Link href="/reviews" onClick={() => setMobileOpen(false)} aria-current={pathname === "/reviews" ? "page" : undefined}>{"Reviews"}</Link>
          <Link className="header-cta btn" href="/contact" onClick={() => setMobileOpen(false)}>{"Get Free Inspection"}</Link>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(open => !open)} aria-expanded={mobileOpen} aria-controls="mobileMenu" type="button">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={mobileOpen ? "mobile-menu open" : "mobile-menu"} id="mobileMenu">
        <Link href="/" onClick={() => setMobileOpen(false)} aria-current={pathname === "/" ? "page" : undefined}>{"Home"}</Link>
        <Link href="/services" onClick={() => setMobileOpen(false)} aria-current={pathname === "/services" ? "page" : undefined}>{"All Services"}</Link>
        <Link href="/weekly" onClick={() => setMobileOpen(false)} aria-current={pathname === "/weekly" ? "page" : undefined}>{"Weekly Pool Cleaning"}</Link>
        <Link href="/green" onClick={() => setMobileOpen(false)} aria-current={pathname === "/green" ? "page" : undefined}>{"Green Pool Recovery"}</Link>
        <Link href="/equipment" onClick={() => setMobileOpen(false)} aria-current={pathname === "/equipment" ? "page" : undefined}>{"Equipment Repair"}</Link>
        <Link href="/remodeling" onClick={() => setMobileOpen(false)} aria-current={pathname === "/remodeling" ? "page" : undefined}>{"Pool Remodeling"}</Link>
        <Link href="/gallery" onClick={() => setMobileOpen(false)} aria-current={pathname === "/gallery" ? "page" : undefined}>{"Gallery"}</Link>
        <Link href="/areas" onClick={() => setMobileOpen(false)} aria-current={pathname === "/areas" ? "page" : undefined}>{"Service Areas"}</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)} aria-current={pathname === "/about" ? "page" : undefined}>{"About Us"}</Link>
        <Link href="/reviews" onClick={() => setMobileOpen(false)} aria-current={pathname === "/reviews" ? "page" : undefined}>{"Reviews"}</Link>
        <Link className="mobile-cta" href="/contact" onClick={() => setMobileOpen(false)}>{"Get Free Pool Inspection →"}</Link>
      </div>
    </header>
  );
}
