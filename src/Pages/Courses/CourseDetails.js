import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import bg from '../../assets/images/bg1.svg'
import Loading from "../Shared/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const { data: course, isLoading } = useQuery("course", () => fetch(`http://localhost:5000/course/${id}`)
.then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(course);
  return (
    <div  style={{ 
        backgroundImage: `url(${bg})` 
      }}>
        <Container className='d-flex justify-content-around align-item-center my-5'>
            <div className="teacherInfo">
                <Card className="text-center">
                  <Card.Header>You are most welcome</Card.Header>
                  <Card.Body>
                    <Card.Title>{course?.heading}</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                        <h6>weeks: {course?.weeks}</h6>
                        <h6>level: {course?.level}</h6>
                        <h6>lesson: {course?.lesson}</h6>
                        <h6>quiz: {course?.quiz}</h6>
                    </Card.Text>
                    <Button variant="primary">Enroll</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted d-flex justify-content-evenly">
                    <div>Price: {course?.price}$</div>
                    <div>Total Students: {course?.students}</div>
                  </Card.Footer>
                </Card>
            </div>
            <div className="teacherInfo">
                <img src={course?.img} alt="" />
            </div>
        </Container>
        <Container className="text-center">
            <h2 className="text-center">Rating This Course</h2>
            
            <div>
            <Button variant="primary">Submit</Button>
            </div>
        </Container>
        
    </div>
  );
};

export default CourseDetails;
