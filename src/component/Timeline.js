import React from "react";
import "../App.css";

const Timeline = () => {
  return (
    <div className="tl-container">
      <div className="tl-flowers one">
        <img className="one" src="/img/flower1.png" alt="" />
        <img className="two" src="/img/flower2.png" alt="" />
      </div>

      <div className="tl-main">
        <h2>Timeline</h2>
        <div className="line">
          <span className="stripe1"></span>
          <span className="stripe2"></span>
          <span className="stripe3"></span>
          <span className="stripe4"></span>
        </div>
        <div className="tl-comp one">
          <p>July 17th - Oct 6th</p>
          <h2>Registration</h2>
          <span></span>
        </div>
        <div className="tl-comp two">
          <p>Oct 13th</p>
          <h2>
            Technical
            <br /> Meeting
          </h2>
          <span></span>
        </div>
        <div className="tl-comp one">
          <p>Oct 26th - 27th</p>
          <h2>
            Competition
            <br /> Day
          </h2>
          <span></span>
        </div>
        <div className="tl-comp two">
          <p>Oct 27th</p>
          <h2>
            Awarding
            <br /> night
          </h2>
          <span></span>
        </div>
        <a href="https://forms.gle/zJSjvk3aEQvzfmoJA"> Daftar Sekarang</a>
      </div>
      <div className="tl-bottom">
        <img className="door" src="/img/door.png" alt="" />
        <img className="grass" src="/img/grass.png" alt="" />
      </div>
    </div>
  );
};

export default Timeline;
