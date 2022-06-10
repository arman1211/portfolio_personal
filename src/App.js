import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
