import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Event from "./component/Event";
import Footer from "./component/Footer";
import Countdown from "./component/Countdown";
import Timeline from "./component/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Countdown />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
