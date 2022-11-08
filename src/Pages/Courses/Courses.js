import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from './Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect( () =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1>This is Courses</h1>
            <Container>
                <Row xs={1} sm={2} md={4} className="g-4 my-5">
                {
                    courses.map(course =><Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;