import React from "react";
import "../App.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-img">
          <img src="" alt="" />
        </div>
        <div className="about-text">
          <h3>About the event</h3>
          <h1>Welcome to EsaWeek 2024</h1>
          <p>
            Esa Week merupakan sebuah acara kompetisi akademik di bidang Bahasa
            Inggris yang diselenggarakan oleh English Student Association
            (Himpunan Mahasiswa Bahasa Inggris UNNES) untuk para pelajar tingkat
            sekolah menengah dan perguruan tinggi se- Jawa Tengah. Acara ini
            bertujuan untuk mendorong semangat berkarya dan mengembangkan bakat
            serta minat para peserta dalam menjelajahi dunia pengetahuan Bahasa
            Inggris.
          </p>
        </div>
        <div className="down">
          <a href="#event">
            <MdKeyboardArrowDown size={70} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
