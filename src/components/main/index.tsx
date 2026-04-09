import AboutSection from "./aboutSection/AboutSection";
import Collaboration from "./collaboration";
import University from "./universities/University";
import UniversityHubsSection from "./universityHubs/UniversityHubsSection";
import Courses from "./courses";

const MainComponent = () => {
  return (
    <main className="max-w-7xl flex flex-col items-center justify-center gap-y-20 mx-auto px-4 my-20 md:px-0">
      <div className="w-full px-4 md:px-0 mx-auto">
        <University />
        <Collaboration />
        <UniversityHubsSection />
        <AboutSection />
      </div>
      <Courses />
    </main>
  );
};

export default MainComponent;
