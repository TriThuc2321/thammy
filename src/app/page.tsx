import {
  AboutSection,
  ContactModal,
  ContactSection,
  HeroSection,
  ProductsSection,
  RandomBooking,
  ServiceSection,
  TestimonialsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <ContactModal />
      <RandomBooking />
    </>
  );
}
