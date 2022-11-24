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

    const handleUser = (event) => {
        event.preventDefault();
        const first_name = event.target.first_name.value;
        const email = event.target.email.value;
        const user = { first_name, email };
    
        //post data to server
        fetch("http://localhost:5000/user", {
          method: "POST", //or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            const newUsers =[...teachers, data];
            setTeachers(newUsers);
            console.log(data);
          });
      };

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
        <h2>My own data</h2>
        <form action="" onSubmit={handleUser}>
          <input type="text" name="first_name" placeholder="Name" required />
          <input type="email" name="email" id="" placeholder="Email" required />
          {/* <input type="password" name="password" id="" placeholder='password' /> */}
          <input type="submit" value="Add user" />
        </form>
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