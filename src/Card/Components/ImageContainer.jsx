import React from "react";
import "../Card.css";
import image from "./image.jpeg";

function ImageContainer() {
  return (
    <div>
      <div className="image__container">
        <img src={image} alt="" />
        <div className="card__banner">
          <svg
            style={{ margin: "8px 8px" }}
            width="14"
            height="14"
            viewBox="0 0 11 11"
            class="mr-2"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#fff"
              stroke-width="1.21"
            >
              <ellipse cx="5.328" cy="5.243" rx="4.723" ry="4.638"></ellipse>
              <path
                stroke-linecap="square"
                d="M4.795 3.67v2.098M5.142 5.768h1.435"
              ></path>
            </g>
          </svg>
          5 Days to enroll
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
