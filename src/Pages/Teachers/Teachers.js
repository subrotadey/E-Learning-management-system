import React from 'react';
import { Container, Row } from 'react-bootstrap';
import teacher1 from '../../assets/images/teacher/teacher1.jpg'
import teacher2 from '../../assets/images/teacher/teacher2.jpg'
import teacher3 from '../../assets/images/teacher/teacher3.jpg'
import teacher4 from '../../assets/images/teacher/teacher4.jpg'
import Teacher from './Teacher';

const Teachers = () => {

    const teacher = [
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
    ];

    return (
        <Container>
            <Row xs={1} sm={2} md={4} className="g-4">
            {
                teacher.map(teach =><Teacher
                    key={teacher._id}
                    teach={teach}
                ></Teacher>)
            }
            </Row>
        </Container>
    );
};

export default Teachers;