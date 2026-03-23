import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

export default function Footer() {
  const locationURL = "https://maps.app.goo.gl/MmqCDCuXLFKCuNGq6";

  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>📍 Venue Location</h2>

      {/* English */}
      <p>
        Balaji Marriage Hall <br />
        Singaperumal Koil,Chengalpet,603204
      </p>

      {/* Tamil */}
      {/* <p>
        ஏபிசி திருமண மண்டபம் <br />
        சென்னை, தமிழ்நாடு
      </p> */}

      {/* QR Code */}
      <div className="qr-section">
        <QRCodeCanvas value={locationURL} size={140} />
        <p>Scan to view location</p>
      </div>

      {/* Map Button */}
      <a href={locationURL} target="_blank" rel="noreferrer">
        <button className="map-btn">Open in Google Maps</button>
      </a>

      <h3 className="closing-text">
        💕 We look forward to celebrating with you 💕
      </h3>

      {/* <p className="closing-text tamil">
        உங்கள் வருகையை ஆவலுடன் எதிர்நோக்குகிறோம்
      </p> */}
    </motion.div>
  );
}