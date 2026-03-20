import { motion } from "framer-motion";
import couple from "../assets/couple.png";

export default function Hero() {
  return (
    <div className="hero">

      {/* Couple Image */}
      <motion.img
        src={couple}
        alt="couple"
        className="couple-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* English Heading */}
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        💍 You're Invited
      </motion.h1>

      {/* English Text */}
      <motion.p
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Together with our families <br />
        We invite you to celebrate our engagement
      </motion.p>

      {/* Divider */}
      {/* <div className="divider"></div> */}

      {/* Tamil Heading */}
      {/* <motion.h2
        className="hero-title tamil"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        திருமண நிச்சயதார்த்த விழா
      </motion.h2> */}

      {/* Tamil Text */}
      {/* <motion.p
        className="hero-text tamil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        எங்கள் குடும்பத்தினருடன் சேர்ந்து <br />
        எங்கள் நிச்சயதார்த்த விழாவிற்கு உங்களை அன்புடன் அழைக்கிறோம்
      </motion.p> */}

    </div>
  );
}