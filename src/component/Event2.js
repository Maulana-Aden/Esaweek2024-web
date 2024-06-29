import React from "react";
// import data from "./Slide.json";

const Event2 = () => {
  return (
    <div className="event">
      <div className="event-container">
        <div className="event-header">
          <h2>Event</h2>
          <span></span>
        </div>
        <div className="event-main">
          <div className="r-card">
            <img
              src="/img/speech.png"
              alt="img"
              width={"400px"}
              height={"400px"}
            />
            <div className="event-text">
              <h1>Speech</h1>
              <p>
                "Participants will prepare and deliver a speech on a
                pre-assigned topic or a topic of their choice. The speech should
                aim to inform, persuade, or inspire the audience, showcasing the
                speaker's ability to communicate effectively."
              </p>
            </div>
          </div>
          <div className="r-card">
            <img
              src="/img/essay.jpeg"
              alt="img"
              width={"400px"}
              height={"400px"}
            />
            <div className="event-text">
              <h1>essay</h1>
              <p>
                "Participants will write an essay on a given theme or topic,
                demonstrating their ability to articulate thoughts and ideas in
                a clear and engaging manner. Essays should be well-structured,
                original, and reflective of the writer's personal voice."
              </p>
            </div>
          </div>
          <div className="r-card">
            <img
              src="/img/poetry.jpg"
              alt="img"
              width={"400px"}
              height={"400px"}
            />
            <div className="event-text">
              <h1>Poetry</h1>
              <p>
                "Participants will select a poem to read aloud, focusing on
                expressive delivery that captures the poem's emotion and rhythm.
                They can choose from published works or original compositions."
              </p>
            </div>
          </div>
          <div className="r-card">
            <img
              src="/img/spelling.png"
              alt="img"
              width={"400px"}
              height={"400px"}
            />
            <div className="event-text">
              <h1>Spelling Bee</h1>
              <p>
                Participants will take turns spelling words aloud, starting with
                easier words and progressing to more difficult ones as the
                competition advances. Each participant must spell the word
                correctly to stay in the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event2;
