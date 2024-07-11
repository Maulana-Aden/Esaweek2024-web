import "../App.css";
import { delay, easeIn, motion } from "framer-motion";

const heroSwipe = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: "easeIn",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="container ">
        <motion.div
          className="hero-text"
          variants={heroSwipe}
          initial="hidden"
          animate="visible"
        >
          <h1>ESA Week</h1>
          <h2>2024</h2>
        </motion.div>
        <motion.div
          className="hero-button"
          variants={heroSwipe}
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
