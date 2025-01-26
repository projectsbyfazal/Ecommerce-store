import HomeBanner from "./(home)/components/HomeBanner";
import "../css/Home.css";
import CategorySlider from "@/components/CategorySlider";
import ProductsList from "@/components/ProductsList";
import OfferProduct from "./(home)/components/OfferProduct";
import HeroSection from "./(home)/components/HeroSection";
import AboutSection from "./(home)/components/AboutSection";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main>
      {/* <HomeBanner /> */}
      
      <HeroSection />
      <CategorySlider />
      <ProductsList />
      <OfferProduct />
      <AboutSection />
      <Subscribe />
      <Footer />
    </main>
  );
}
