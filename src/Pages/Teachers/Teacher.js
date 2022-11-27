import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// import useTeachers from '../../hooks/useTeachers';
import './Teacher.css'

const Teacher = (props) => {
  
  const {_id, first_name,last_name, img_link, designation} = props.teacher;
  const navigate = useNavigate();

  const teacherDetails = () => {
    navigate(`/details/${_id}`)
  }
  
    return (
        <>
            <Col className='teacher-card-style'>
              <Card className='card-bg'>
                <Card.Img variant="top" src={img_link} />
                <div className='d-flex justify-content-around fs-1 i-style'>
                  <a href="www.facebook.com" className=''><BsFacebook className=''></BsFacebook></a>
                  <a href="www.twitter.com"><BsTwitter></BsTwitter></a>
                  <a href="www.linkedin.com"><BsLinkedin></BsLinkedin></a>
                </div>
                <Card.Body>
                  <Card.Title className='fw-bold'>{first_name}  {last_name}</Card.Title>
                  <Card.Text>
                    <small>{designation}</small>
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