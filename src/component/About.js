import React from "react";
import "../App.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
// import logo from "/img/logo.png";

const containersVariants = {
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
    },
  },
};

const downVariants = {
  animationDown: {
    y: [0, -20, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.75,
        ease: "easeOut",
      },
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView === true) {
      mainControls.start("visible");
      slideControls.start("visible");
      console.log(isInView);
    }
  }, [isInView]);

  return (
    <div className="about" id="about">
      <div className="about-container" ref={ref}>
        <div className="test img">
          <motion.div
            className="about-img"
            variants={containersVariants}
            initial="hidden"
            animate={mainControls}
          >
            <img src="/img/logo.png" alt="" width={300} height={300} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
              position: "absolute",
              background: "#798D4A",
              width: "100%",
              height: "100%",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,

              zIndex: 20,
            }}
          ></motion.div>
        </div>

        <div className="about-text" ref={ref}>
          <div className="test">
            <motion.div
              variants={containersVariants}
              initial="hidden"
              animate={mainControls}
            >
              <h3>About the event</h3>
            </motion.div>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                background: "#798D4A",
                width: "100%",
                height: "100%",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,

                zIndex: 20,
              }}
            ></motion.div>
          </div>
          <div className="test">
            <motion.div
              variants={containersVariants}
              initial="hidden"
              animate={mainControls}
            >
              <h1>
                Welcome to{" "}
                <Typewriter
                  options={{
                    strings: ["Esa Week 2024"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </motion.div>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                background: "#798D4A",
                width: "100%",
                height: "100%",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,

                zIndex: 20,
              }}
            ></motion.div>
          </div>
          <div className="test">
            <motion.div
              variants={containersVariants}
              initial="hidden"
              animate={mainControls}
            >
              <p>
                ESA Week merupakan sebuah acara kompetisi akademik di bidang
                Bahasa Inggris yang diselenggarakan oleh English Student
                Association (Himpunan Mahasiswa Bahasa Inggris UNNES) untuk para
                pelajar tingkat sekolah menengah dan perguruan tinggi se- Jawa
                Tengah. Acara ini bertujuan untuk mendorong semangat berkarya
                dan mengembangkan bakat serta minat para peserta dalam
                menjelajahi dunia pengetahuan Bahasa Inggris.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControls}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                background: "#798D4A",
                width: "100%",
                height: "100%",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,

                zIndex: 20,
              }}
            ></motion.div>
          </div>
        </div>

        <motion.div
          className="down"
          variants={downVariants}
          animate="animationDown"
        >
          <a href="#event">
            <MdKeyboardArrowDown size={70} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
