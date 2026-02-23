import Collaboration from "./collaboration";
import University from "./universities/University";

const MainComponent = () => {
  return (
    <main className="container flex flex-col gap-y-20">
      <University />
      <Collaboration />
    </main>
  );
};

export default MainComponent;
