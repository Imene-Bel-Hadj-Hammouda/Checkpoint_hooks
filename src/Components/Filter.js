import React from "react";
// import StarRatingComponent from "react-star-rating-component";
import ReactStars from "react-rating-stars-component";

const Filter = ({setfrate,setftext}) => {
  const handleChange = (event) => setftext(event.target.value);
  const handleRateChange = (value) => {
    // console.log(value)
    setfrate(value)};
  return (
    <div className="App">
      
      <label className="App-header">
      <label className="input">Find your favourite film</label>
      <input type="text" placeholder="Search for a movie..." name="Search for a movie..."  onChange={handleChange} />
<br/>
      <ReactStars  name="ratingRes" onChange={handleRateChange}/>
      </label>
    </div>
  );
}

export default Filter;