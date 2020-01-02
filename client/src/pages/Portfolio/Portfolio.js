import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import {Link, BrowserRouter as Router } from "react-router-dom";

/* popout the browser and maximize to see more rows! -> */
const Portfolio = () => <Gallery photos={photos} />;
render(<Portfolio  />, document.getElementById("root"));

export default Portfolio