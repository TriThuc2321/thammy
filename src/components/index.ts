import dynamic from "next/dynamic";

// Optimize dynamic imports 
export const Header = dynamic(() => import("./Header"));

export const Footer = dynamic(() => import("./Footer"));

export const ContactSection = dynamic(() => import("./ContactSection"));

export const CommentsSection = dynamic(() => import("./CommentsSection"));

export const HeroSection = dynamic(() => import("./HeroSection"));

export const ProductsSection = dynamic(() => import("./ProductsSection"));

export const ServiceSection = dynamic(() => import("./ServiceSection"));

export const AboutSection = dynamic(() => import("./AboutSection"));

// Low priority components - load only when needed
export const RandomBooking = dynamic(() => import("./RandomBooking"));

export const ContactModal = dynamic(() => import("./ContactModal"));
