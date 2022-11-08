import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './Teacher.css'

const Teacher = ({ teacher }) => {
  // console.log(teacher)
  // const {_id, first_name, img, designation} = props.teacher
  const navigate = useNavigate();

  const teacherDetails = () => {
    navigate(`/details/${teacher._id}`)
  }

    return (
        <>
            <Col className='teacher-card-style'>
              <Card className='card-bg'>
                <Card.Img variant="top" src={teacher.img} />
                <div className='d-flex justify-content-around fs-1 i-style'>
                  <a href="www.facebook.com" className=''><BsFacebook className=''></BsFacebook></a>
                  <a href="www.twitter.com"><BsTwitter></BsTwitter></a>
                  <a href="www.linkedin.com"><BsLinkedin></BsLinkedin></a>
                </div>
                <Card.Body>
                  <Card.Title className='fw-bold'>{teacher.first_name} {teacher.last_name}</Card.Title>
                  <Card.Text>
                    <small>{teacher.designation}</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                  <Button onClick={teacherDetails} className="footer-btn" bg="warning" >View Details</Button>
                </Card.Footer>
              </Card>
            </Col>
        </>
    );
};

export default Teacher;