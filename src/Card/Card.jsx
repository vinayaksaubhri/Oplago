import React from "react";
import "./Card.css";

import ImageContainer from "./Components/ImageContainer";

function Card() {
  return (
    <div className="card__container">
      <ImageContainer />
      <div className="bottomContainer">
        <div className="bottomContainer__Text">
          IBPS PO & SBI PO Live Coachting in English Batch
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr />
        </div>
        <div className="bottomContainer__bottom">
          <div className="LiveClass">
            <svg
              width="11"
              height="9"
              viewBox="0 0 13 11"
              ng-if="feature.type === 'Live Class'"
              class="ng-scope"
            >
              <g fill="#E02F2F" fill-rule="evenodd">
                <path
                  fill-opacity=".2"
                  stroke="#E02F2F"
                  stroke-linejoin="round"
                  stroke-width="1.1"
                  d="M3.784 1.244l.066-.004a30.534 30.534 0 0 1 5.434.004A2.984 2.984 0 0 1 12 4.216V6.566a3.002 3.002 0 0 1-2.734 2.99 30.916 30.916 0 0 1-5.468.002l-.032-.002A3.034 3.034 0 0 1 1 6.534v-2.25a3.052 3.052 0 0 1 2.784-3.041z"
                ></path>
                <path d="M5.4 4.433v1.934a.66.66 0 0 0 1.026.549l1.45-.967a.658.658 0 0 0 0-1.098l-1.45-.967a.66.66 0 0 0-1.026.549z"></path>
              </g>
            </svg>
            240+ Live Classes
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="Question">
              <svg
                width="11"
                height="9"
                viewBox="0 0 7 10"
                ng-if="feature.type === 'Questions'"
                class="ng-scope"
              >
                <path
                  fill="#FA9917"
                  fill-opacity=".4"
                  fill-rule="evenodd"
                  stroke="#FA9917"
                  stroke-width="1.6"
                  d="M6.2 8.862l-2.675-.961L.8 8.867V.8h5.4v8.062z"
                ></path>
              </svg>
              9000+ Questions
            </div>
            <div className="Notes">
              <svg
                width="11"
                height="9"
                viewBox="0 0 10 12"
                ng-if="feature.type === 'Notes'"
                class="ng-scope"
              >
                <path
                  fill="#CC4B4C"
                  stroke="#E02F2F"
                  stroke-width=".6"
                  d="M1.726 11a.53.53 0 0 1-.335-.123c-.36-.296-.41-.625-.386-.85.063-.615.76-1.26 2.074-1.918a27.04 27.04 0 0 0 1.313-4.07c-.346-.821-.682-1.888-.437-2.514.086-.22.193-.387.393-.46C4.427 1.036 4.627 1 4.7 1c.175 0 .328.246.437.397.102.142.334.444-.13 2.575.468 1.054 1.13 2.128 1.764 2.863.455-.09.846-.136 1.164-.136.543 0 .872.138 1.006.423.11.236.065.51-.135.818-.193.295-.46.45-.77.45-.421 0-.912-.29-1.46-.864-.982.224-2.13.625-3.059 1.068-.29.671-.567 1.212-.826 1.61-.355.542-.661.796-.965.796zM3 9c-.695.35-.978.637-.999.799-.003.026-.012.097.14.201.049-.014.332-.13.859-1zm5-1.158c.273.237.34.357.518.357.078 0 .302-.003.405-.167A.6.6 0 0 0 9 7.875c-.041-.024-.096-.074-.393-.074-.17 0-.382.008-.607.041zM4.823 5c-.22.981-.51 2.04-.823 3a12.98 12.98 0 0 1 2-.801A14.239 14.239 0 0 1 4.823 5zm.192-3c-.034.01-.461.546.033 1 .329-.658-.018-1.004-.033-1z"
                ></path>
              </svg>
              120+ Notes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
