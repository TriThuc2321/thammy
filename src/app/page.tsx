import {
  AboutSection,
  ContactModal,
  ContactSection,
  HeroSection,
  ProductsSection,
  RandomBooking,
  ServiceSection,
  CommentsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProductsSection />
      <ContactSection />
      <ContactModal />
      <CommentsSection />

      <RandomBooking />
    </>
  );
}
