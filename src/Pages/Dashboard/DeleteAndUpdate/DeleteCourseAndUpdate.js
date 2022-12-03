import React from "react";
import { Container } from "react-bootstrap";
import useCourses from "../../../hooks/useCourses";
import CourseDeleteAndUpdateCard from "./DeleteAndUpdateCard/CourseDeleteAndUpdateCard";

const DeleteCourseAndUpdate = () => {
  const [courses] = useCourses();
  return (
    <div>
        <h2 className="text-center text-info">Available Courses: {courses.length}</h2>
        <Container>
            {
                courses.map(course =><CourseDeleteAndUpdateCard
                    key={course._id}
                    course={course}
                ></CourseDeleteAndUpdateCard>)
            }
        </Container>
    </div>
  );
};

export default DeleteCourseAndUpdate;
