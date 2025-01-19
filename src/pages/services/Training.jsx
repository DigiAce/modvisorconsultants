import { Trainings } from "../../components/services/Trainings";
import HeroSection from "../../components/services/HeroSection";
import Background from "../../components/layout/BackGround";

const Training = () => {
  const backgroundImageUrl = "/img/s3.jpg";
  return (
    <Background backgroundImageUrl={backgroundImageUrl}>
      <HeroSection
        id="about"
        title="Training"
        description="ModVisor offers customized training for individuals and corporate teams, <br>focusing on practical financial Modelling skills designed to meet your specific business needs."
      />
      <Trainings />
    </Background>
  );
};

export default Training;
