import React, { useState } from "react";
import "./style.css"; // Assuming you have a separate CSS file for styling

function ImageSlider({ srcUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={srcUrl}
        alt="Your_Image"
        className={isHovered ? "blurred" : ""}
      />
      {isHovered && <p className="text">Learn More</p>}
    </div>
  );
}

export default ImageSlider;
