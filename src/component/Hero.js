import "../App.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="container ">
        <motion.div
          className="hero-text"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1>EsaWeek</h1>
          <h2>2024</h2>
        </motion.div>
        <motion.div
          className="hero-button"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#about";
            }}
          >
            See more
          </button>
        </motion.div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Hero;
