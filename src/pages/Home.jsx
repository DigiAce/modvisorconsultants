import AboutUs from "../components/home/AboutUs";
import { AppleCardsCarouselDemo } from "../components/home/AppleCard";
import Features from "../components/home/Features";
import Global from "../components/home/Global";
import HeroSection from "../components/home/HeroSection";
// import WhyUs from "../components/home/WhyUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      {/* <WhyUs /> */}
      <AppleCardsCarouselDemo />
      <Features />
      <Global />
    </>
  );
};

export default Home;
