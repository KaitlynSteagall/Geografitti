import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "./assets/logincity.jpg",
  "./assets/splash.jpg",
  "./assets/image.png"
];

class Portfolio extends Component {
  render() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 3000);
      return () => clearInterval(timer);
    }, [index]);

    return (
      <Gallery
        style={{
          background: "transparent",
          height: "60vh",
          width: "60vw"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);

export default Portfolio;