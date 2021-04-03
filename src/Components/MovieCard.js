import React from "react";
import { Button, Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = (props) => {

  return (
    <Card
      style={{ width: "30%", margin: "1.65%", color: "black", fontSize: "18" }}
    >
      <Card.Img variant="top" src={props.movie.posterURL} />
      <Card.Body>
        <Card.Title style={{ fontSize: 24 }}>{props.movie.title}</Card.Title>
        <Card.Text style={{ fontSize: 20 }}>
          {props.movie.description}
        </Card.Text>
        <StarRatingComponent
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