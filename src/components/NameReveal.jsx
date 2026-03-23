import { motion } from "framer-motion";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

export default function NameReveal() {
  return (
    <div style={styles.container}>

      {/* Center Content */}
    
      {/* Boy */}
     {/* Boy Frame */}
<motion.div
  style={styles.leftFrame}
  initial={{ x: -200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img src={boy} alt="boy" style={styles.image} />
</motion.div>

<motion.h1
  style={styles.leftName}
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5 }}
>
  Saravana
</motion.h1>

{/* Girl Frame */}
<motion.div
  style={styles.rightFrame}
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>
  <img src={girl} alt="girl" style={styles.image} />
</motion.div>

<motion.h1
  style={styles.rightName}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 1.3 }}
>
  Mahalakshmi
</motion.h1>
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

    </div>
  );
}

/* ================= INLINE STYLES ================= */

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
  },

  /* CENTER CONTENT */
  centerContent: {
    position: "absolute",
    top: "20%",   // moved slightly up for balance
    left: "0%",
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

  /* LEFT FRAME (BOY) */
  leftFrame: {
    position: "absolute",
    bottom: "120px",   // lifted up
    left: "15%",
    width: "clamp(130px, 18vw, 220px)",
    height: "clamp(130px, 18vw, 220px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "5px solid #FFD700",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    background: "#fff",
  },

  /* RIGHT FRAME (GIRL) */
  rightFrame: {
    position: "absolute",
    bottom: "120px",
    right: "15%",
    width: "clamp(130px, 18vw, 220px)",
    height: "clamp(130px, 18vw, 220px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "5px solid #FFD700",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    background: "#fff",
  },

  /* IMAGE INSIDE */
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  /* NAMES BELOW FRAME */
  leftName: {
    position: "absolute",
    bottom: "60px",   // below frame
    left: "15%",
    width: "clamp(130px, 18vw, 220px)",
    textAlign: "center",
    fontSize: "clamp(16px, 2vw, 22px)",
    color: "#FFD700",
    fontFamily: "cursive",
  },

  rightName: {
    position: "absolute",
    bottom: "60px",
    right: "15%",
    width: "clamp(130px, 18vw, 220px)",
    textAlign: "center",
    fontSize: "clamp(16px, 2vw, 22px)",
    color: "#FFD700",
    fontFamily: "cursive",
  },
};