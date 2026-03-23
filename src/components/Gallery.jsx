import flower from "../assets/garland.png";
import flowerG from "../assets/flower.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={flower} className="top-garland" />
      {/* <img src={flowerG} className="floating delay" /> */}
    </div>
  );
}