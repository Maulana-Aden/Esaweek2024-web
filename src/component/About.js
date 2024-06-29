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
            Tempor aliqua reprehenderit aliqua pariatur nisi ex mollit laboris
            anim. Veniam occaecat amet velit irure exercitation est pariatur ex
            sunt velit quis eiusmod. Ad sint duis elit veniam minim quis officia
            velit nostrud enim. Nisi sunt proident incididunt id incididunt
            officia pariatur non incididunt aute sit exercitation tempor.
            Proident eu aliqua exercitation proident esse quis laboris eu.
            Tempor aliqua reprehenderit aliqua pariatur nisi ex mollit laboris
            anim. Veniam occaecat amet velit irure exercitation est pariatur ex
            sunt velit quis eiusmod. Ad sint duis elit veniam minim quis officia
            velit nostrud enim. Nisi sunt proident incididunt id incididunt
            officia pariatur non incididunt aute sit exercitation tempor.
            Proident eu aliqua exercitation proident esse quis laboris eu.
            Tempor aliqua reprehenderit aliqua pariatur nisi ex mollit laboris
            anim. Veniam occaecat amet velit irure exercitation est pariatur ex
            sunt velit quis eiusmod. Ad sint duis elit veniam minim quis officia
            velit nostrud enim. Nisi sunt proident incididunt id incididunt
            officia pariatur non incididunt aute sit exercitation tempor.
            Proident eu aliqua exercitation proident esse quis laboris eu.
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
