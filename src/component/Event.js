// import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../App.css";
import "swiper/css";
import data from "./Slide.json";
import { slideSettings } from "./SlideSettings";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Event = () => {
  // const [swipe, setSwipe] = useState(false);

  // useEffect(() => {
  //   if (window.clientWidth <= 720) {
  //     setSwipe(true);
  //   } else {
  //     setSwipe(false);
  //   }
  // }, []);

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
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img
                    src={card.image}
                    alt="img"
                    width={"400px"}
                    height={"400px"}
                  />
                  <div className="event-text">
                    <h1>{card.name}</h1>
                    <p>{card.description}</p>
                    <div className="event-link">
                      <a href="https://forms.gle/zJSjvk3aEQvzfmoJA">
                        {card.button}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
