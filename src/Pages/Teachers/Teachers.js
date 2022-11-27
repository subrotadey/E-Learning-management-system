import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTeachers from '../../hooks/useTeachers';
// import Loading from '../Shared/Loading';
import Teacher from './Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useTeachers();
    return (
        <div>
            <div className='breadcrumb-style'>
                <Container className='py-2'>
                <h1 className='px-0'>Our  Teachers</h1>
                <Breadcrumb>
                  <Breadcrumb.Item><Link className='text-white' to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item active>Teachers</Breadcrumb.Item>
                </Breadcrumb>
                </Container>
            </div>
            <Container>
      </Container>
            
            <Container>
                <Row xs={1} sm={2} md={4} className="g-4 my-5">
                {
                    teachers.map(teacher =><Teacher
                        key={teacher._id}
                        teacher={teacher}
                    ></Teacher>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Teachers;