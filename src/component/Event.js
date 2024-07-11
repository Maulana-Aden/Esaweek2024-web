import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../App.css";
import "swiper/css";
import { slideSettings } from "./SlideSettings";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};
const slideVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
};

const Event = () => {
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
    <div className="event" id="event">
      <div className="event-container">
        <div className="event-header" ref={ref}>
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={mainControls}
          >
            <h2>Event</h2>
          </motion.div>
          <span></span>
        </div>
        <motion.div
          className="event-main"
          variants={slideVariants}
          initial="hidden"
          animate={mainControls}
        >
          <Swiper {...slideSettings} loop className="swiper-main">
            <SliderButton />
            <SwiperSlide>
              <div className="r-card">
                <img
                  src="/img/story.png"
                  alt="img"
                  width={"400px"}
                  height={"400px"}
                />
                <div className="event-text">
                  <h1>Story Telling</h1>
                  <div className="event-desc">
                    <p>
                      Lomba menceritakan suatu cerita secara individual untuk
                      pelajar SMP/sederajat dan SMA/sederajat se-Jawa Tengah.
                      Peserta diperbolehkan menggunakan alat peraga yang
                      berhubungan dengan cerita.
                      <br />
                      <br />
                      Ketentuan Lomba:
                      <br />
                      &nbsp; - Peserta menceritakan suatu cerita.
                      <br />
                      &nbsp; - Peserta diperbolehkan menggunakan alat peraga
                      yang relevan dengan cerita.
                    </p>
                  </div>

                  <div className="event-link">
                    <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="r-card">
                <img
                  src="/img/speech.png"
                  alt="img"
                  width={"400px"}
                  height={"400px"}
                />
                <div className="event-text">
                  <h1>Speech</h1>
                  <div className="event-desc">
                    <p>
                      Lomba pidato untuk pelajar SMA/sederajat se-Jawa Tengah
                      dan mahasiswa/mahasiswi perguruan tinggi se-Jawa Tengah.
                      <br />
                      <br />
                      Ketentuan Lomba: <br />
                      &nbsp; - Setiap peserta membawakan pidato hasil karya
                      sendiri dengan tema yang ditentukan oleh panitia.
                    </p>
                  </div>

                  <div className="event-link">
                    <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="r-card">
                <img
                  src="/img/essay.jpeg"
                  alt="img"
                  width={"400px"}
                  height={"400px"}
                />
                <div className="event-text">
                  <h1>Essay</h1>
                  <div className="event-desc">
                    <p>
                      Lomba menulis esai dalam bahasa Inggris untuk
                      mahasiswa/mahasiswi se-Jawa Tengah. <br />
                      <br />
                      Ketentuan Lomba: <br />
                      &nbsp; - Peserta mengumpulkan draft esai berbahasa
                      Inggris. <br />
                      &nbsp; - Esai akan diseleksi oleh juri hingga terpilih 10
                      esai untuk dipresentasikan saat babak final.
                    </p>
                  </div>

                  <div className="event-link">
                    <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="r-card">
                <img
                  src="/img/poetry.jpg"
                  alt="img"
                  width={"400px"}
                  height={"400px"}
                />
                <div className="event-text">
                  <h1>Poem Reading</h1>
                  <div className="event-desc">
                    <p>
                      Lomba membaca puisi dalam bahasa Inggris untuk pelajar
                      SMP/sederajat dan SMA/sederajat se-Jawa Tengah. <br />
                      <br />
                      Ketentuan Lomba:
                      <br />
                      &nbsp; - Peserta membacakan puisi dengan tema yang telah
                      ditentukan oleh panitia.
                    </p>
                  </div>

                  <div className="event-link">
                    <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="r-card">
                <img
                  src="/img/spelling.png"
                  alt="img"
                  width={"400px"}
                  height={"400px"}
                />
                <div className="event-text">
                  <h1>Spelling Bee</h1>
                  <div className="event-desc">
                    <p>
                      Lomba mengeja kata untuk pelajar SMP/sederajat dan
                      SMA/sederajat se-Jawa Tengah.
                      <br />
                      <br />
                      Ketentuan Lomba:
                      <br />
                      &nbsp; - Peserta mengeja kata berbahasa Inggris yang sudah
                      ditentukan oleh panitia.
                    </p>
                  </div>

                  <div className="event-link">
                    <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Event;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slideNext()} className="button-prev">
        <FaArrowLeft size={32} />
      </button>
      <button onClick={() => swiper.slidePrev()} className="button-next">
        <FaArrowRight size={32} />
      </button>
    </div>
  );
};
