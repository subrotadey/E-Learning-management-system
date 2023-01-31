import React from "react";
import { Link } from "react-router-dom";
import useTeachers from "../../../../hooks/useTeachers";

const TeacherDeleteAndUpdateCard = (props) => {
  const { _id, first_name } = props.teacher;
  const [teachers, setTeachers] = useTeachers();
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      console.log("Deleting user with id,", id);
      const url = `https://edulogy.onrender.com/teacher/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = teachers.filter((user) => user._id !== id);
            setTeachers(remaining);
          }
        });
    }
  };
  return (
    <div
      className="d-flex justify-content-between my-3 py-2 rounded"
      style={{ border: "2px solid black" }}
    >
      <div className="d-flex">
        <h6>{first_name}</h6>{" "}
        <small>
          {" "}
          =`{">>"}`ID({_id})
        </small>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <Link className="m-3" to={`/updateTeacher/${_id}`}>
            <button className=" btn btn-info">Update</button>
          </Link>
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => handleUserDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDeleteAndUpdateCard;
