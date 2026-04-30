"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSignup from "@/components/sections/hero/HeroSignup";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Settings, Shield, Zap } from "lucide-react";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "/portfolio" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <HeroSignup
          title="Roofing & Digital Services"
          description="We combine elite roofing craftsmanship with high-conversion web strategies to grow your business."
          tag="Our Expertise"
          background={{ variant: "canvas-reveal" }}
        />
        <FeatureBento
          title="Specialized Roofing Solutions"
          description="Comprehensive roofing services backed by digital excellence."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            { title: "Roof Installation", description: "High-quality residential and commercial installations.", bentoComponent: "reveal-icon", icon: Settings },
            { title: "Roof Repairs", description: "Fast, reliable repair services for all roof types.", bentoComponent: "reveal-icon", icon: Shield },
            { title: "Preventative Maintenance", description: "Protect your investment with regular inspections.", bentoComponent: "reveal-icon", icon: Zap },
          ]}
        />
        <FooterBase
          logoText="Webild"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }] },
            { title: "Services", items: [{ label: "Roofing", href: "/services" }, { label: "Digital", href: "/services" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}