import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const RatingStars = ({ rating = 0 }) => {
  return (
    <div>
      <div style={{ color: "gold" }}>
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarFill key={index} className="ms-1" />
          ) : (
            <Star key={index} className="ms-1" />
          )
        )}
      </div>
    </div>
  );
};

export default RatingStars;
