import Hero from "./components/Hero";
import Details from "./components/Details";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";
import NameReveal from "./components/NameReveal";
function App() {
  return (
   <div style={{overflowX:'hidden'}}>
      <Hero />
      <Details />
      <NameReveal />
      <Story />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;