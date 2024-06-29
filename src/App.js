import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Event from "./component/Event";
import Footer from "./component/Footer";
// import Event2 from "./component/Event2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Event />
      {/* <Event2 /> */}
      <Footer />
    </div>
  );
}

export default App;
