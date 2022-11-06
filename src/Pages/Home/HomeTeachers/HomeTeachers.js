import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teacher1 from '../../../assets/images/teacher/teacher1.jpg'
import teacher2 from '../../../assets/images/teacher/teacher2.jpg'
import teacher4 from '../../../assets/images/teacher/teacher4.jpg'
import HomeTeacher from '../HomeTeacher/HomeTeacher';
import './HomeTeachers.css'

const HomeTeachers = () => {

    const teacher = [
        {
            _id:1,
            img: teacher2,
            name:'PETER MITCHLLE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:2,
            img: teacher1,
            name:'LISA BROWN',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:3,
            img: teacher4,
            name:'JOHNATHAN DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
    ];


    return (
        <Container className='my-5'>
        <div>
            <h1 className='border-style'>
                <span>AWESOME</span>
                TEACHERS</h1>
            <h5>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</h5>
        </div>
            <Row xs={1} sm={2} md={4} className="g-4 my-5 d-flex justify-content-center">
            {
                teacher.map(teach =><HomeTeacher
                    key={teach._id}
                    teach={teach}
                ></HomeTeacher>)
            }
            </Row>
            <div  className=' d-flex justify-content-center'>
                <Link to="/teachers">
                    <Button className='home-btn'>See More</Button>
                </Link>
            </div>
            
        </Container>
        
    );
};

export default HomeTeachers;