import React from "react";
import "./cardInfo.styles.css";

const CardInfo = ({ textInfo, total }) => {
  return (
    <div className="card-info">
      <p>{textInfo}</p>
      <p>{total}</p>
    </div>
  );
};

export default CardInfo;
