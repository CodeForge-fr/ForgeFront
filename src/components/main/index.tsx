import AboutSection from "./aboutSection/AboutSection";
import Collaboration from "./collaboration";
import University from "./universities/University";
import UniversityHubsSection from "./universityHubs/UniversityHubsSection";

const MainComponent = () => {
  return (
    <main className="container flex flex-col gap-y-20">
      <University />
      <Collaboration />
      <UniversityHubsSection />
      <AboutSection />
    </main>
  );
};

export default MainComponent;
