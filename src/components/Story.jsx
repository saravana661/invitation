import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="story-section">
      
      {/* English Story */}
      <motion.div
        className="story-card"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="title">Our Story 💕</h2>

        <p>
          Two souls, one beautiful journey… <br /><br />
          What started as a simple meeting turned into a bond filled with love,
          laughter, and endless memories. <br /><br />
          Now, with the blessings of our families, we are taking the next step
          together.
        </p>
      </motion.div>

      {/* Tamil Story */}
      {/* <motion.div
        className="story-card tamil"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="title">எங்கள் கதை 💕</h2>

        <p>
          இரண்டு இதயங்கள், ஒரு அழகான பயணம்… <br /><br />
          ஒரு சாதாரண சந்திப்பாக தொடங்கியது, இன்று அன்பு, சிரிப்பு மற்றும் இனிய
          நினைவுகளால் நிரம்பிய உறவாக மாறியுள்ளது. <br /><br />
          எங்கள் குடும்பத்தினரின் ஆசீர்வாதத்துடன், இந்த புதிய பயணத்தை
          தொடங்குகிறோம்.
        </p>
      </motion.div> */}

    </div>
  );
}