import { Container, Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import Course from "./Course";
import "./Course.css";

const Courses = () => {
  const [courses, setCourses] = useCourses();

  return (
    <div>
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
