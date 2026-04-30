"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSignup from "@/components/sections/hero/HeroSignup";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
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
          title="Our Portfolio"
          description="See how we’ve helped businesses build stronger brands and better roofs."
          tag="Recent Projects"
          background={{ variant: "canvas-reveal" }}
        />
        <FeatureCardTwentySix
          title="Showcased Projects"
          description="A collection of our best work across various sectors."
          textboxLayout="default"
          useInvertedBackground={false}
          cardClassName="!h-auto aspect-video"
          features={[
            { title: "Summit Roofing", description: "Complete roofing overhaul", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp", buttonIcon: ArrowUpRight, buttonHref: "#" },
            { title: "Modern Esthetics", description: "High-end commercial build", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp", buttonIcon: ArrowUpRight, buttonHref: "#" }
          ]}
        />
        <FooterBase
          logoText="Webild"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }] },
            { title: "Portfolio", items: [{ label: "Roofing Projects", href: "/portfolio" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}