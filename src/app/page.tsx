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
      <CommentsSection />
      <ContactSection />
      <ContactModal />
      <RandomBooking />
    </>
  );
}
