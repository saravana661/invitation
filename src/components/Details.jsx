import { motion } from "framer-motion";

export default function Details() {
  return (
    <div className="details-wrapper mt-5">

      <motion.div
        className="details-card"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="details-title">💍 Engagement Details</h2>

        <div className="detail-row">
          <div className="icon">📅</div>
          <div>
            <p className="label">Date</p>
            <p className="value">25 May 2026</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="icon">⏰</div>
          <div>
            <p className="label">Time</p>
            <p className="value">10:30 AM</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="icon">📍</div>
          <div>
            <p className="label">Venue</p>
            <p className="value">Singaperumal Koil, Chennai</p>
          </div>
        </div>

        <div className="decor-line"></div>
      </motion.div>

    </div>
  );
}