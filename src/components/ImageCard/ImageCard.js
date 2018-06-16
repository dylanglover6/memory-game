import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
      <div className="card">
        <div className="img-container">
          <img className="" alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/> 
        </div>
      </div>
);
export default ImageCard;
