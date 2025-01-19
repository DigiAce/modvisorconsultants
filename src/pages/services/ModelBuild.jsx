import { Build } from "../../components/services/Build";
import HeroSection from "../../components/services/HeroSection";
import Background from "../../components/layout/BackGround";

const ModelBuild = () => {
  const backgroundImageUrl = "/img/s1.jpg";
  return (
    <Background backgroundImageUrl={backgroundImageUrl}>
      <HeroSection
        id="about"
        title="Model Build"
        description="We deliver custom, user-friendly models that simplify complex data, ensuring accuracy, <br> flexibility, and actionable insights to drive confident decisions."
      />
      <Build />
    </Background>
  );
};

export default ModelBuild;
