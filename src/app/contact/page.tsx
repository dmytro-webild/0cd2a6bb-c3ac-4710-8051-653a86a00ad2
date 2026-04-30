"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function ContactPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="Webild"
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            button={{ text: "Get Started", href: "/contact" }}
          />
        </div>
        <div id="contact-form" data-section="contact-form">
          <ContactCenter
            tag="Contact Us"
            title="Let's Build Your Future"
            description="Request a consultation for your premium roofing project in Chennai today."
            background={{ variant: "rotated-rays-animated" }}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Webild"
            copyrightText="© 2026 | Webild"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}