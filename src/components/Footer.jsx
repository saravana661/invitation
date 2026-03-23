import { color, motion } from "framer-motion";

export default function Footer() {
  const lat = 12.7596;
  const lng = 80.0075;

  const locationURL = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     <h2 style={{ color: "#FFD700" ,fontWeight:'bold',fontFamily:'Playfair Display' }} className="text-white">
  📍 Venue Location
</h2>
      <p>
        Balaji Marriage Hall <br />
        Singaperumal Koil, Chengalpet, 603204
      </p>

      <div className="qr-section">
        <iframe
          width="340"
          height="340"
          style={{ border: 0, borderRadius: "10px" }}
          src={`https://www.google.com/maps?q=${lat},${lng}&output=embed`}
        />
      </div>

      <button
        onClick={() => window.open(locationURL, "_blank")}
        className="map-btn"
      >
        Open Map
      </button>

      <h3 className="closing-text">
        💕 We look forward to celebrating with you 💕
      </h3>
    </motion.div>
  );
}