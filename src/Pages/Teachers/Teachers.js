import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teacher1 from '../../assets/images/teacher/teacher1.jpg'
import teacher2 from '../../assets/images/teacher/teacher2.jpg'
import teacher3 from '../../assets/images/teacher/teacher3.jpg'
import teacher4 from '../../assets/images/teacher/teacher4.jpg'
import Teacher from './Teacher';
import './Teachers.css'

const Teachers = () => {

    const teacherInfo = [
        {   
            _id:1,
            img: teacher1,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:2,
            img: teacher2,
            name:'JOHNATHAN DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:3,
            img: teacher3,
            name:'LISA BROWN',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:4,
            img: teacher4,
            name:'PETER MITCHLLE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:5,
            img: teacher1,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:6,
            img: teacher2,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:6,
            img: teacher1,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:6,
            img: teacher4,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
        {
            _id:6,
            img: teacher3,
            name:'ANA DOE',
            designation: 'Graphic Designer',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?'
        },
    ];

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
                <Row xs={1} sm={2} md={4} className="g-4 my-5">
                {
                    teacherInfo.map(teach =><Teacher
                        key={teacherInfo._id}
                        teach={teach}
                    ></Teacher>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Teachers;