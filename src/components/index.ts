import dynamic from "next/dynamic";

export const Header = dynamic(() => import("./Header"));
export const Footer = dynamic(() => import("./Footer"));
export const ContactSection = dynamic(() => import("./ContactSection"));
export const CommentsSection = dynamic(() => import("./CommentsSection"));
export const HeroSection = dynamic(() => import("./HeroSection"));
export const ProductsSection = dynamic(() => import("./ProductsSection"));
export const ServiceSection = dynamic(() => import("./ServiceSection"));
export const AboutSection = dynamic(() => import("./AboutSection"));
export const RandomBooking = dynamic(() => import("./RandomBooking"));
export const ContactModal = dynamic(() => import("./ContactModal"));
