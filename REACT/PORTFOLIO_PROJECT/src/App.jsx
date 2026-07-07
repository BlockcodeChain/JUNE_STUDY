import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-[#08122c]">
      <Navbar/>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;