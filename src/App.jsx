import { useRef } from "react";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import NameReveal from "./components/NameReveal";
import "./App.css";
import { useEffect } from "react";
function App() {
  const containerRef = useRef();

  // 🔽 Scroll Down
  const scrollNext = () => {
    const container = containerRef.current;
    container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  // 🔼 Back to Top
  const scrollTop = () => {
    const container = containerRef.current;
    container.scrollTo({ top: 0, behavior: "smooth" });
  };

useEffect(() => {
  const container = containerRef.current;

  const interval = setInterval(() => {
    container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }, 5000); // every 5 sec

  return () => clearInterval(interval);
}, []);
  
  return (
    <div className="scroll-container" ref={containerRef}>
      
      <section className="page">
        <Hero />
        <button className="down-btn" onClick={scrollNext}>↓</button>
      </section>

      <section className="page">
        <Details />
        <button className="down-btn" onClick={scrollNext}>↓</button>
      </section>

      <section className="page">
        <NameReveal />
        <button className="down-btn" onClick={scrollNext}>↓</button>
      </section>

      <section className="page">
        <Story />
        <button className="down-btn" onClick={scrollNext}>↓</button>
      </section>

      <section className="gallery-section">
        <Gallery />
        <button className="down-btn" onClick={scrollNext}>↓</button>
      </section>

      <section className="page">
        <Footer />
        <button className="top-btn" onClick={scrollTop}>↑</button>
      </section>

    </div>
  );
}

export default App;