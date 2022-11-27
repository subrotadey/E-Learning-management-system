import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteCourseAndUpdate = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourseDelete = id => {
    const proceed = window.confirm('Are you want to delete?');
    if(proceed){
        console.log('Deleting course with id,', id);
        const url = `http://localhost:5000/course/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = courses.filter(course => course._id !== id);
                setCourses(remaining);
            }
        })
    }
}
  return (
    <div>
            <h2>Available Teachers: {courses.length}</h2>
            <ul>
                {
                    courses.map(course=> <h6
                    key={course._id}
                    > <li> {course.heading}
                    <Link className="m-3" to={`/update/${course._id}`}><button>Update</button></Link>
                    <button onClick={() => handleCourseDelete(course._id)}>delete</button></li>
                    </h6> )
                }
            </ul>
        </div>
  );
};

export default DeleteCourseAndUpdate;
