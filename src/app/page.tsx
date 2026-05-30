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
import ArtistSection from "@/components/ArtistSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ArtistSection />
      <ProductsSection />
      <ProductsCarousel />
      <CommentsSection />
      <ContactSection />
      <ContactModal />
      <RandomBooking />
    </>
  );
}
