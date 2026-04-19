import React from "react";
import "../styles/card.css";

function Card(props) {
  return (
    <div className="back">
      <div className="container">
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        <p className="tags">{props.tags}</p>
      </div>
      <div className="link-container">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Explore
        </a>
      </div>
    </div>
  );
}

export default Card;
