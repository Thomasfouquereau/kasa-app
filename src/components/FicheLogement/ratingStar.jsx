import React from "react";
import starImg from "./star.svg"
import starEmply from "./starEmpty.svg"

export default function RatingStar({rating}) {
    const starsStyle = {
        display: "flex",
        flexWrap: "nowrap",
    }
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img key={`${i}-fill`} src={starImg} className="star" alt="star" />);
    }
    for (let i = 0; i < 5 - rating; i++) {
        stars.push(<img key={`${i}-empty`} src={starEmply} className="star" alt="star" />);
    }
    return (
        <div className="rating-star" style={starsStyle}>
            {stars}
        </div>
    );
}