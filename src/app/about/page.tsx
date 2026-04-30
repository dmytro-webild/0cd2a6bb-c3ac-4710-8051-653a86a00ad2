"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function AboutPage() {
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
        <div id="about-story" data-section="about-story">
          <SplitAbout
            title="Our Story"
            description="Based in Chennai, we specialize in high-end roofing solutions that blend luxury, aesthetics, and structural integrity."
            textboxLayout="default"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
            bulletPoints={[
              { title: "Expert Craftsmanship", description: "Meticulous attention to detail in every project." },
              { title: "Premium Materials", description: "Sourced from the best suppliers globally." }
            ]}
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