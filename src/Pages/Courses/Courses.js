import { Breadcrumb, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import Course from "./Course";
import "./Course.css";

const Courses = () => {
  const [courses] = useCourses();

  return (
    <div>
      <div className="breadcrumb-style">
        <Container className="py-2">
          <h1 className="px-0">Our Courses</h1>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link className="text-white" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>courses</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4 my-5 Card-height">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
