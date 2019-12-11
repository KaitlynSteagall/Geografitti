import React from "react";
import "./style.css";
import video from "../../assets/smoke.mp4"

function SmokeLogo(props) {
  return (
  <section>
    <video src={video} autoplay muted></video>
    <h1>
      <span>G</span>
      <span>E</span>
      <span>O</span>
      <span>G</span>
      <span>R</span>
      <span>A</span>
      <span>F</span>
      <span>F</span>
      <span>I</span>
      <span>T</span>
      <span>I</span>
    </h1>
  </section>
  );
}

export default SmokeLogo;