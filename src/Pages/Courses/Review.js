import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const star = {
    size: 30,
    color: "black",
    activeColor: "yellow",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Rating This Course</h2>
        <hr className="w-25 mx-auto " />
      <div className="d-flex justify-content-center my-3">
        <ReactStars {...star} />,
      </div>
      <Form>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write Your Massage here about review</Form.Label>
        <Form.Control as="textarea" rows={4} className="w-50 mx-auto" />
      </Form.Group>
      </Form>
      <Button variant="outline-info" type="submit">
          Rate us
        </Button>
    </Container>
  );
};

export default Review;
