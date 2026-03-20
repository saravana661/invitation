import { motion } from "framer-motion";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

export default function NameReveal() {
  return (
    <div style={styles.container}>

      {/* Center Content */}
      <motion.div
        style={styles.centerContent}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div style={styles.heart}>❤️</div>

        <h2 style={styles.coupleNames}>
          Saravana & Mahalakshmi
        </h2>

        <p style={styles.tagline}>Together Forever</p>
      </motion.div>

      {/* Boy */}
      <motion.img
        src={boy}
        alt="boy"
        style={styles.leftPerson}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        style={styles.leftName}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        Saravana
      </motion.h1>

      {/* Girl */}
      <motion.img
        src={girl}
        alt="girl"
        style={styles.rightPerson}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <motion.h1
        style={styles.rightName}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        Mahalakshmi
      </motion.h1>

    </div>
  );
}

/* ================= INLINE STYLES ================= */

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
  },

  /* CENTER */
  centerContent: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
  },

  heart: {
    fontSize: "36px",
    marginBottom: "10px",
    animation: "pulse 1.5s infinite",
  },

  coupleNames: {
    fontSize: "clamp(28px, 5vw, 48px)",
    color: "#FFD700",
    fontWeight: "bold",
    letterSpacing: "2px",
    textShadow: "0 0 20px rgba(255,215,0,0.6)",
    fontFamily: "cursive",
  },

  tagline: {
    fontSize: "clamp(14px, 2vw, 18px)",
    marginTop: "10px",
  },

  /* BOY */
  leftPerson: {
    position: "absolute",
    bottom: 0,
    left: "10%",
    width: "clamp(120px, 18vw, 220px)",
  },

  leftName: {
    position: "absolute",
    bottom: "180px",
    left: "10%",
    fontSize: "clamp(16px, 2vw, 22px)",
    color: "#FFD700",
    fontFamily: "cursive",
  },

  /* GIRL */
  rightPerson: {
    position: "absolute",
    bottom: 0,
    right: "10%",
    width: "clamp(120px, 18vw, 220px)",
  },

  rightName: {
    position: "absolute",
    bottom: "180px",
    right: "10%",
    fontSize: "clamp(16px, 2vw, 22px)",
    color: "#FFD700",
    fontFamily: "cursive",
  },
};