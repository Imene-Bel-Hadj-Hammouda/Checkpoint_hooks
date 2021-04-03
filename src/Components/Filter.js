import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Filter = (props) => {
  const handleChange = (event) => props.setftext(event.target.value);
  const handleRateChange = (value) => props.setfrate(value);
  return (
    <div>
      <label className="input">Research :</label>
      <br />
      <input type="text" name="Search for a movie..." onChange={handleChange} />
      <br />
      <StarRatingComponent name="ratingRes" onStarClick={handleRateChange}/>
    </div>
  );
}

export default Filter;