"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
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
        <ContactSplit
          tag="Contact Us"
          title="Let's Build Your Future"
          description="Request a consultation for your premium roofing project in Chennai today."
          background={{ variant: "rotated-rays-animated" }}
          mediaPosition="right"
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "#services" }, { label: "Work", href: "#work" }, { label: "Contact", href: "/contact" }] },
            { title: "Connect", items: [{ label: "Email", href: "mailto:info@webild.com" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}