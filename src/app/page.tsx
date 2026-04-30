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
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="We Build Digital Experiences"
          description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
          tag="Award-Winning Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Project", href: "#contact" },
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
              title: "SEO",
              description: "We optimize your website to rank higher on search engines and drive organic traffic.",
              bentoComponent: "marquee",
              centerIcon: Search,
              variant: "text",
              texts: ["Keywords", "Backlinks", "Meta Tags", "Organic Traffic", "Rankings", "Analytics", "SERP", "Indexing"],
            },
            {
              title: "Web Development",
              description: "Custom-built websites that are fast, responsive, and designed to convert.",
              bentoComponent: "media-stack",
              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "Web project - AgentFlow AI platform" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Web project - Architecture studio" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Web project - Summit Roofing" },
              ],
            },
            {
              title: "Branding",
              description: "Build a memorable brand identity that resonates with your audience.",
              bentoComponent: "media-stack",
              items: [
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
              title: "Umbra Skincare",
              description: "Luxury fragrance e-commerce",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp",
              imageAlt: "Umbra Skincare website",
              buttonIcon: ArrowUpRight,
              buttonHref: "#",
            },
            {
              title: "Luxuria Travel",
              description: "Bespoke luxury travel experiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",
              imageAlt: "Luxuria Travel website",
              buttonIcon: ArrowUpRight,
              buttonHref: "#",
            },
            {
              title: "Dental Care",
              description: "Premier dental practice",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",
              imageAlt: "Luxury Dental Care website",
              buttonIcon: ArrowUpRight,
              buttonHref: "#",
            },
            {
              title: "Summit Roofing",
              description: "Professional roofing services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp",
              imageAlt: "Summit Roofing website",
              buttonIcon: ArrowUpRight,
              buttonHref: "#",
            },
            {
              title: "Dubai Real Estate",
              description: "Luxury property listings",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-5.webp",
              imageAlt: "Dubai Real Estate website",
              buttonIcon: ArrowUpRight,
              buttonHref: "#",
            },
          ]}
        />
        <FeatureBento
          title="Our Promise"
          description="We deliver results that speak for themselves."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "All Devices Optimization",
              description: "Pixel-perfect websites that look stunning on every screen size and device.",
              bentoComponent: "phone",
              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Responsive check",
              alertMessage: "All breakpoints passed",
              apps: [
                { name: "Phone", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Books", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Camera", icon: Camera },
                { name: "Music", icon: Music },
                { name: "Settings", icon: Settings },
                { name: "Chat", icon: MessageCircle },
              ],
            },
            {
              title: "Secure Hosting",
              description: "Enterprise-grade security and 99.9% uptime for your website.",
              bentoComponent: "reveal-icon",
              icon: Shield,
            },
            {
              title: "Fast Turnaround",
              description: "From concept to launch in record time without sacrificing quality.",
              bentoComponent: "timeline",
              heading: "Project Launch",
              subheading: "Week 1",
              items: [
                { label: "Discovery & wireframes", detail: "Day 1-3" },
                { label: "Design & development", detail: "Day 4-10" },
                { label: "Testing & deployment", detail: "Day 11-14" },
              ],
              completedLabel: "Live",
            },
            {
              title: "Seamless Integrations",
              description: "Connect with the tools you already use — CRMs, analytics, payments, and more.",
              bentoComponent: "orbiting-icons",
              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Growth Trends",
              description: "Data-driven insights to optimize your search presence and drive traffic.",
              bentoComponent: "line-chart",
            },
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
        <MetricCardOne
          title="Trusted by Industry Leaders"
          description="Years of experience building digital products that drive real results."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "100+", title: "Projects", description: "Successfully delivered across all industries", icon: Award },
            { id: "satisfaction", value: "99%", title: "Satisfaction", description: "Client satisfaction rate and counting", icon: Users },
            { id: "years", value: "8+", title: "Years", description: "Of crafting exceptional digital experiences", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="Why Choose Webild"
          description="See the difference a professional web agency makes."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Generic templates with no personality",
              "Slow load times and poor performance",
              "No SEO strategy or search visibility",
              "Outdated design that hurts credibility",
              "No ongoing support after launch",
            ],
          }}
          positiveCard={{
            items: [
              "Custom designs tailored to your brand",
              "Lightning-fast performance on all devices",
              "Built-in SEO to drive organic traffic",
              "Modern design that builds trust",
              "Dedicated support and maintenance",
            ],
          }}
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
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How long does a typical project take?", content: "Most projects are completed within 2-4 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation." },
            { id: "2", title: "What is your pricing structure?", content: "We offer project-based pricing tailored to your needs. Every project includes design, development, SEO optimization, and post-launch support." },
            { id: "3", title: "Do you offer ongoing maintenance?", content: "Yes! We provide ongoing support and maintenance packages to keep your website updated, secure, and performing at its best." },
            { id: "4", title: "Can you redesign my existing website?", content: "Absolutely. We specialize in website redesigns that modernize your brand while preserving your existing content and SEO rankings." },
            { id: "5", title: "What technologies do you use?", content: "We build with modern technologies including Next.js, React, and Tailwind CSS to ensure fast, scalable, and maintainable websites." },
          ]}
        />
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Transform Your Digital Presence?"
          description="Let's build something extraordinary together. Get in touch and let's discuss your next project."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Start Your Project", href: "#contact" },
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
              title: "Company",
              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Design", href: "#" },
              ],
            },
            {
              title: "Connect",
              items: [
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
