import { motion } from "framer-motion";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import "./NameReveal.css";

export default function NameReveal() {
  return (
    <div className="name-container">

      {/* Boy */}
      <motion.div
        className="frame left-frame"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={boy} alt="boy" />
      </motion.div>

      <motion.h1
        className="person-name left-name"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        Saravana
      </motion.h1>

      {/* Girl */}
      <motion.div
        className="frame right-frame"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img src={girl} alt="girl" />
      </motion.div>

      <motion.h1
        className="person-name right-name"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        Mahalakshmi
      </motion.h1>

      {/* Center Content */}
      <motion.div
        className="center-content"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="heart">❤️</div>

        <h2 className="couple-names">
          <span>Saravana &</span><br />
          <span>Mahalakshmi</span>
        </h2>

        <p className="tagline">Together Forever</p>
      </motion.div>

    </div>
  );
}