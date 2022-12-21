import React from "react";
import AddTeachers from "./Admin_pages/AddTeachers";
import DeleteTeacherAndUpdate from "./DeleteAndUpdate/DeleteTeacherAndUpdate";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AddCourse from "./Admin_pages/AddCourse";
import DeleteCourseAndUpdate from "./DeleteAndUpdate/DeleteCourseAndUpdate";
import MyBookingSlot from "./MyBookingSlot";
// import Dash from "./Dash";

const Dashboard = () => {
  return (
    <div>
      
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
          <h1 className="text-center" >DashBoard</h1>
            <Nav.Item>
              <Nav.Link eventKey="first">Booking course</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Add Teachers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Delete Teachers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Add Course</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Delete Course</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <MyBookingSlot></MyBookingSlot>
            
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <AddTeachers></AddTeachers>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <DeleteTeacherAndUpdate></DeleteTeacherAndUpdate>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <AddCourse/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <DeleteCourseAndUpdate></DeleteCourseAndUpdate>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
};

export default Dashboard;
