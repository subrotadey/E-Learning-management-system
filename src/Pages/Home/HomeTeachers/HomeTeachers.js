// import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTeachers from '../../../hooks/useTeachers';
import Loading from '../../Shared/Loading';
import HomeTeacher from '../HomeTeacher/HomeTeacher';

import './HomeTeachers.css'

const HomeTeachers = () => {

    const [teachers, isLoading] = useTeachers();
    if(isLoading){
        return <Loading></Loading>
    }
    // console.log(teachers);

//       const [teachers, setTeachers] = useState([]);
//         useEffect( () => {
//       fetch('/teachers.json')
//       .then(res => res.json())
//       .then(data => setTeachers(data));
//   }, [])

    const sliceTeacher = teachers.slice(0, 3);

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
                sliceTeacher.map(teach =><HomeTeacher
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