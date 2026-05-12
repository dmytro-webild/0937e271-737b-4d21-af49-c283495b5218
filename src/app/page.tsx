"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Buckley Commerce"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Excellence in Commerce"
      description="Buckley Commerce delivers strategic solutions to empower your small business growth. Professional, reliable, and results-oriented partnership."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-office-buildings-shanghai_1359-637.jpg",
          imageAlt: "corporate business office building",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/proud-businesswoman-showing-her-report_1139-218.jpg",
          imageAlt: "business professionals meeting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/graphic-tablet_1134-354.jpg",
          imageAlt: "digital business growth chart",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-confident-diverse-business-partners-meeting-city_74855-1964.jpg",
          imageAlt: "professional handshake business deal",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/composition-different-traveling-elements_23-2148884936.jpg",
          imageAlt: "global business connection network",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/workplace-office_1098-13828.jpg",
          imageAlt: "modern office workplace interior",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "About Buckley Commerce",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/businesspeople-working-office_1139-254.jpg",
          alt: "professional business team meeting",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Services",
          title: "Strategic Growth",
          subtitle: "Expanding market reach",
          description: "Proven methodologies for scaling business operations sustainably.",
          imageSrc: "http://img.b2bpic.net/free-photo/long-view-modern-skyscrapers-office-buildings_23-2148836794.jpg",
        },
        {
          tag: "Services",
          title: "Operations",
          subtitle: "Streamlined processes",
          description: "Optimize your day-to-day business functions for maximum efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-patterned-wall_1359-610.jpg",
        },
        {
          tag: "Services",
          title: "Analytics",
          subtitle: "Data-driven insights",
          description: "Actionable intelligence to inform your key business decisions.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-modern-office-buildings_1359-691.jpg",
        },
      ]}
      title="Our Expertise"
      description="Comprehensive commerce and consulting services designed to elevate small businesses into industry leaders."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          title: "Clients Served",
          value: "500+",
          icon: Users,
        },
        {
          id: "m2",
          title: "Growth Projects",
          value: "120+",
          icon: TrendingUp,
        },
        {
          id: "m3",
          title: "Efficiency Increase",
          value: "45%",
          icon: Zap,
        },
      ]}
      title="Proven Impact"
      description="Quantifiable results driving success for our valued partners."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex Smith",
          handle: "@alexs",
          testimonial: "Excellent service and professional approach.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-team-working-together_23-2149333016.jpg",
        },
        {
          id: "2",
          name: "Jordan Doe",
          handle: "@jdoe",
          testimonial: "Transformed our operations completely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/co-workers-discussing-last-financial-analysis_1139-219.jpg",
        },
        {
          id: "3",
          name: "Taylor Ray",
          handle: "@tray",
          testimonial: "The best consulting experience so far.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/team-leader-discussing-charts-graphs_1098-1838.jpg",
        },
        {
          id: "4",
          name: "Morgan Lee",
          handle: "@mlee",
          testimonial: "Highly recommended for any small business.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149346629.jpg",
        },
        {
          id: "5",
          name: "Casey Quinn",
          handle: "@cquinn",
          testimonial: "Professionalism at its peak.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-concept-with-graphic-holography_23-2149160928.jpg",
        },
      ]}
      showRating={true}
      title="Partner Success"
      description="What our clients are saying about our collaboration."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How do we get started?",
          content: "Contact us to schedule an introductory consultation.",
        },
        {
          id: "2",
          title: "What industries do you serve?",
          content: "We support small to mid-sized businesses across various sectors.",
        },
        {
          id: "3",
          title: "Are services customizable?",
          content: "Yes, we tailor solutions to your specific operational needs.",
        },
        {
          id: "4",
          title: "Do you provide remote consulting?",
          content: "Absolutely, we utilize digital tools to serve clients globally.",
        },
        {
          id: "5",
          title: "Can you handle complex analytics?",
          content: "Our team specializes in advanced data interpretation for commerce.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-project-manager-showing-presentation-laptop-colleague-boss-office-medium-shot-front-view-teamwork-communication-concept_74855-11990.jpg"
      title="Frequently Asked"
      description="Common questions regarding our professional services."
      faqsAnimation="slide-up"
      imageAlt="customer support professional help"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Ready to take your business to the next level? Connect with us today."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:info@buckleycommerce.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/new-york-city-manhattan-dusk-panorama_649448-4911.jpg"
      logoText="Buckley Commerce"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      imageAlt="modern office building evening"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
