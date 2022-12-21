import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import bg from "../../assets/images/bg1.svg";
import Loading from "../Shared/Loading";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Review from "./Review";
// import { toast } from "react-toastify";

const CourseDetails = () => {
  const [date] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const [setBook] = useState("");

  const { id } = useParams();
  const { data: course, isLoading } = useQuery("course", () =>
    fetch(
      `https://e-learning-management-system-git-095dad-subrotadey540-gmailcom.vercel.app/course/${id}`
    ).then((res) => res.json())
  );

  const courseName = course?.heading;
  // console.log(courseName);

  if (isLoading) {
    return <Loading />;
  }

  // console.log(user.email);
  const handleEnroll = (event) => {
    event.preventDefault();
    console.log(event.target.phone.value);

    const booking = {
      bookingName: courseName,
      date: formattedDate,
      price: course.price,
      email: user.email,
      studentName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/enrollment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("success");
        setBook(data);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container>
        <Row className="mx-5 my-5">
          <Col sm={4} className="teacherInfo my-auto">
            <img className="w-100 my-5" src={course?.img} alt="" />
          </Col>
          <Col sm={8} className="teacherInfo">
            <Card className="text-center">
              <Card.Header>You are most welcome</Card.Header>
              <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                  <h6>weeks: {course?.weeks}</h6>
                  <h6>level: {course?.level}</h6>
                  <h6>lesson: {course?.lesson}</h6>
                  <h6>quiz: {course?.quiz}</h6>
                </Card.Text>

                {/* ------------------- Modal ---------------------------- */}

                <Button variant="outline-info" onClick={handleShow}>
                  Enroll
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{course?.heading}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleEnroll}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          value={format(date, "PP")}
                          disabled
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          disabled
                          value={user?.displayName || ""}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          disabled
                          value={user?.email || ""}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          disabled
                          value={course?.price || ""}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          name="phone"
                          type="phoneNumber"
                          placeholder="Enter Your Phone Number"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                      <Button
                        variant="outline-info"
                        className="mx-auto"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="outline-info"
                      className="mx-auto"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-evenly">
                <div>Price: {course?.price}$</div>
                <div>Total Students: {course?.students}</div>
                <div>
                  <p>Enroll date: {format(date, "PP")}</p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <div className="mx-auto d-flex justify-content-center">
          <DayPicker selected={date} className="d-none" />
        </div>
      </Container>
      <Container className="text-center">
        <div>
          <Review></Review>
          {/* <Button variant="outline-info" className="">Review</Button> */}
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
