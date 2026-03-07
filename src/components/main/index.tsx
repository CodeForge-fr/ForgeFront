import AboutSection from "./aboutSection/AboutSection";
import Collaboration from "./collaboration";
import University from "./universities/University";
import UniversityHubsSection from "./universityHubs/UniversityHubsSection";

const MainComponent = () => {
  return (
    <main className="container flex flex-col items-center justify-center gap-y-20 mx-auto px-4 my-20">
      <University />
      <Collaboration />
      <UniversityHubsSection />
      <AboutSection />
    </main>
  );
};

export default MainComponent;
