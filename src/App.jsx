import "./App.css";
import "@fontsource/poppins"; // Defaults to 400 weight
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SkillSection from "./Components/SkillSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SkillSection />
    </div>
  );
}

export default App;
