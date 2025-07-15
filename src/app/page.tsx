import {
  AboutSection,
  ContactModal,
  ContactSection,
  HeroSection,
  ProductsSection,
  RandomBooking,
  ServiceSection,
  CommentsSection,
  ProductsCarousel,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProductsSection />
      <ProductsCarousel />
      <CommentsSection />
      <ContactSection />
      <ContactModal />
      <RandomBooking />
    </>
  );
}
