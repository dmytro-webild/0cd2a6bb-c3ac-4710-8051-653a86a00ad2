"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <TextSplitAbout
          title="Our Story"
          description={[
            "Based in Chennai, we specialize in high-end roofing solutions that blend luxury, aesthetics, and structural integrity.",            "Our team brings years of expertise, combining traditional craftsmanship with modern innovation to protect your most valuable assets."
          ]}
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "#services" }, { label: "Work", href: "#work" }, { label: "Contact", href: "/contact" }] },
            { title: "Services", items: [{ label: "Roofing", href: "#" }, { label: "Consulting", href: "#" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}