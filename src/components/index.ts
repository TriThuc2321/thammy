import dynamic from "next/dynamic";

export const Header = dynamic(() => import("./Header"));
export const Footer = dynamic(() => import("./Footer"));
export const ContactSection = dynamic(() => import("./ContactSection"));
export const TestimonialsSection = dynamic(
  () => import("./TestimonialsSection")
);
export const HeroSection = dynamic(() => import("./HeroSection"));
export const ProductsSection = dynamic(() => import("./ProductsSection"));
export const ServiceSection = dynamic(() => import("./ServiceSection"));
export const AboutSection = dynamic(() => import("./AboutSection"));
