import React from "react";
import { Button, Card } from "react-bootstrap";
// import ReactStarst from "react-star-rating-component";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = (props) => {

  return (
    <Card className="card"
      style={{ width: "20%" , margin: "5%", color: "black", fontSize: "12" }}>
    
      <Card.Img variant="top" style={{height:"220px" }} src={props.movie.posterURL} />
      <Card.Body>
        <Card.Title style={{ fontSize: 24 }}>{props.movie.title}</Card.Title>
        <Card.Text style={{ fontSize: 16 }}>
          {props.movie.description}
        </Card.Text>
        <ReactStars
          name={props.movie.title}
          editing={false}
          starCount={5}
          size={24}
          activeColor="#ffd700"
          value={props.movie.rate}
        />
        <br />
        <Button
          variant="primary"
          onClick={() => props.deleteMovie(props.movie.id)}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;