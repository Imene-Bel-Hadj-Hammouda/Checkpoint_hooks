import React from "react";
// import StarRatingComponent from "react-star-rating-component";
import ReactStars from "react-rating-stars-component";

const Filter = (props) => {
  const handleChange = (event) => props.setftext(event.target.value);
  const handleRateChange = (value) => props.setfrate(value);
  return (
    <div className="App">
      <label className="input">Find your favourite film</label>
      <label className="App-header">
      <input type="text" placeholder="Search for a movie..." name="Search for a movie..."  onChange={handleChange} />
<br/>
      <ReactStars  name="ratingRes" onStarClick={handleRateChange}/>
      </label>
    </div>
  );
}

export default Filter;