"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
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
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <HeroSplitDoubleCarousel
          title="We Build Digital Experiences"
          description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
          tag="Award-Winning Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Project", href: "/contact" },
            { text: "View Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "UI UX Design - Daily Life app" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "UI UX Design - SaaS platform" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "UI UX Design - Luminé skincare" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp", imageAlt: "UI UX Design - Online courses" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-9.webp", imageAlt: "UI UX Design - Business coach" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp", imageAlt: "UI UX Design - Luxuria travel" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "UI UX Design - Dental practice" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "UI UX Design - AI product builder" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "UI UX Design - AI automation" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Services"
          description="We offer a full suite of digital services to help your brand stand out online."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "All Services", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "SEO",              description: "We optimize your website to rank higher on search engines and drive organic traffic.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Keywords", "Backlinks", "Meta Tags", "Organic Traffic", "Rankings", "Analytics", "SERP", "Indexing"],
            },
            {
              title: "Web Development",              description: "Custom-built websites that are fast, responsive, and designed to convert.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "Web project - AgentFlow AI platform" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Web project - Architecture studio" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Web project - Summit Roofing" },
              ],
            },
            {
              title: "Branding",              description: "Build a memorable brand identity that resonates with your audience.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "Brand project 1" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp", imageAlt: "Brand project 2" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "Brand project 3" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Our Work"
          description="A selection of projects we've crafted for clients across industries."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Work", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Umbra Skincare",              description: "Luxury fragrance e-commerce",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp",              imageAlt: "Umbra Skincare website",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Luxuria Travel",              description: "Bespoke luxury travel experiences",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",              imageAlt: "Luxuria Travel website",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Dental Care",              description: "Premier dental practice",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",              imageAlt: "Luxury Dental Care website",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Summit Roofing",              description: "Professional roofing services",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp",              imageAlt: "Summit Roofing website",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Dubai Real Estate",              description: "Luxury property listings",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-5.webp",              imageAlt: "Dubai Real Estate website",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Webild completely transformed our online presence. The team delivered a stunning website that exceeded our expectations and doubled our conversion rate."
          rating={5}
          author="— Maria Santos, CEO at Luxuria Travel"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", alt: "Client" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <TeamCardFive
          title="Meet the Team"
          description="The creative minds behind your next project."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Sarah Miller", role: "Lead Developer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", imageAlt: "Sarah Miller" },
            { id: "2", name: "Valentina Reyes", role: "Creative Director", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp", imageAlt: "Valentina Reyes" },
            { id: "3", name: "Carlos Mendoza", role: "UX Designer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp", imageAlt: "Carlos Mendoza" },
          ]}
        />
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Transform Your Digital Presence?"
          description="Let's build something extraordinary together. Get in touch and let's discuss your next project."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Start Your Project", href: "/contact" },
            { text: "View Our Work", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Web Development", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Design", href: "#" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
