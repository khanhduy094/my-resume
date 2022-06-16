import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss";
function StarRating(props) {
  let [rating, setRating] = useState(null);
  let [hover, setHover] = useState(null);

  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            ></input>
            <FaStar
              size={40}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
