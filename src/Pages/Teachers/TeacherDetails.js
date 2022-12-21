// import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import useTeachers from '../../hooks/useTeachers';
import bg from "../../assets/images/bg1.svg";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const TeacherDetails = () => {
  const { id } = useParams();
  const { data: teacher, isLoading } = useQuery("teacher", () =>
    fetch(
      `https://e-learning-management-system-server-site.vercel.app/teacher/${id}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  console.log(teacher);
  return (
    <Container
      className="my-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container className="d-flex  justify-content-around">
        <div className="teacherInfo">
          <h2>
            Instructor : {teacher?.first_name} {teacher?.last_name}
          </h2>
          <p>{teacher?.email}</p>
          <p>{teacher?.designation}</p>
          <p>{teacher?.description}</p>
        </div>
        <div className="teacherInfo">
          <img src={teacher?.img_link} alt="" />
        </div>
      </Container>
    </Container>
  );
};

export default TeacherDetails;
