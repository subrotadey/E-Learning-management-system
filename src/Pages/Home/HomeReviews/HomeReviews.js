import React from "react";
import "./HomeReviews.css";

import review1 from "../../../assets/images/reviwer/review1.jpg";
import review2 from "../../../assets/images/reviwer/review2.jpg";
import review3 from "../../../assets/images/reviwer/review3.jpg";
import review4 from "../../../assets/images/reviwer/review4.jpg";
import review5 from "../../../assets/images/reviwer/review5.jpg";
import review6 from "../../../assets/images/reviwer/review6.jpg";
import review7 from "../../../assets/images/reviwer/review7.jpg";
import review8 from "../../../assets/images/reviwer/review8.jpg";
import Marquee from "react-fast-marquee";
import { Container } from "react-bootstrap";
import HomeReview from "./HomeReview/HomeReview";

const HomeReviews = () => {
  const reviewInfo = [
    {
      _id: 1,
      img: review1,
      name: "Lawrence Petrie",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 2,
      img: review2,
      name: "Lucas Aquilani",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 3,
      img: review3,
      name: "Ruth Aquilani",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 4,
      img: review4,
      name: "Jane Ansems",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 5,
      img: review5,
      name: "Jack Peters",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 6,
      img: review6,
      name: "Lora Portilla",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 7,
      img: review7,
      name: "Anna Phillips",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
    {
      _id: 8,
      img: review8,
      name: "Roland Walker",
      date: "10/12/2022",
      review_mark: "",
      description: "very effective course",
    },
  ];

  return (
    <Container className="review_style my-4">
        <h1 className='border-style'>
            <span>OUR STUDENTS</span>
             Says</h1>
        <h5>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</h5> 
      <div>
        <Container className="my-2">
          <Marquee speed={40}>
            {reviewInfo.map((review) => (
              <HomeReview key={reviewInfo._id} review={review}></HomeReview>
            ))}
          </Marquee>
        </Container>
      </div>
    </Container>
  );
};

export default HomeReviews;
