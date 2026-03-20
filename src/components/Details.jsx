import { motion } from "framer-motion";

export default function Details() {
  return (
    <div className="details-wrapper">




      {/* English Card */}
      <motion.div
        className="details-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

      
        <h2 className="details-title">💍 Engagement Details</h2>

        <div className="detail-row">
          <span>📅</span>
          <p><strong>Date:</strong> 25 May 2026</p>
        </div>

        <div className="detail-row">
          <span>⏰</span>
          <p><strong>Time:</strong> 10:30 AM</p>
        </div>

        <div className="detail-row">
          <span>📍</span>
          <p><strong>Venue:</strong> Chennai</p>
        </div>
      </motion.div>

      {/* Tamil Card */}
      {/* <motion.div
        className="details-card tamil-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="details-title tamil">நிகழ்வு விவரங்கள்</h2>

        <div className="detail-row">
          <span>📅</span>
          <p className="tamil"><strong>தேதி:</strong> 25 மே 2026</p>
        </div>

        <div className="detail-row">
          <span>⏰</span>
          <p className="tamil"><strong>நேரம்:</strong> காலை 10:30</p>
        </div>

        <div className="detail-row">
          <span>📍</span>
          <p className="tamil"><strong>இடம்:</strong> சென்னை</p>
        </div>
      </motion.div> */}

    </div>
  );
}