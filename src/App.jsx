import Hero from "./components/Hero";
import Details from "./components/Details";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";
import NameReveal from "./components/NameReveal";
function App() {
  return (
    <div className="scroll-container">
      <section className="page"><Hero /></section>
      <section className="page"><Details /></section>
      <section className="page"><NameReveal /></section>
      <section className="page"><Story /></section>
    <section className="gallery-section">
  <Gallery />
</section>
      <section className="page"><Footer /></section>
    </div>
  );
}

export default App;

