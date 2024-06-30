// import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../App.css";
import "swiper/css";
import { slideSettings } from "./SlideSettings";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Event = () => {
  return (
    <div className="event" id="event">
      <div className="event-container">
        <div className="event-header">
          <h2>Event</h2>
          <span></span>
        </div>
        <div className="event-main">
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
                      Tingkat SMA/sederajat se-Jawa Tengah:
                      <br />
                      &nbsp; - Setiap peserta membawakan pidato hasil karya
                      sendiri dengan tema yang ditentukan oleh panitia.
                      <br />
                      &nbsp; - Peserta menceritakan suatu cerita.
                      <br />
                      <br />
                      Tingkat Perguruan Tinggi se-Jawa Tengah:
                      <br /> &nbsp; - Setiap peserta membawakan pidato hasil
                      karya sendiri yang dibuat pada hari pelaksanaan lomba
                      dengan tema yang telah ditentukan oleh panitia.
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
        </div>
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
