import { useState, useRef, useEffect } from "react";
import "../App.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("October 7, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="count-container">
      <div className="background">
        <img className="count-bg1" src="/img/count-bg1.png" alt="" />
        <img className="count-bg3" src="/img/idk.png" alt="" />
        <div className="count-bg2"></div>
        {/* <img className="count-bg2" src="/img/count-bg2.jpg" alt="" /> */}
      </div>
      <div className="count-main">
        <div className="count-text">
          <h2>Now Open</h2>
          <div className="count-time">
            <h1>{timerDays} :</h1>
            <h1> {timerHours} :</h1>
            <h1> {timerMinutes} :</h1>
            <h1> {timerSeconds}</h1>
          </div>
          <a href="https://forms.gle/zJSjvk3aEQvzfmoJA"> Daftar Sekarang</a>
        </div>
        <div className="assets-bg">
          <img
            className="assets-fairy"
            src="/img/element4.png"
            alt=""
            width={400}
          />
          <img className="stars one" src="/img/star1.png" alt="" />
          <img className="stars two" src="/img/star2.png" alt="" />
          <img className="stars three" src="/img/star3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
