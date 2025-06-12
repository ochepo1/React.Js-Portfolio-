import "./App.css";
import "@fontsource/poppins"; // Defaults to 400 weight
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SkillSection from "./Components/SkillSection";
import ProjectsList from "./Components/ProjectsList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectsList />
      <Footer />
    </div>
  );
}

export default App;
