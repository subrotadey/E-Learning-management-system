// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTeachers from '../../hooks/useTeachers';

const TeacherDetails = () => {
    
    const {id} = useParams();

//     const [teachers, setTeachers] = useState([]);
//         useEffect( () => {
//       fetch('/teachers.json')
//       .then(res => res.json())
//       .then(data => setTeachers(data));
//   }, [])
    
    // const [teachers, refetch] = useTeachers();
    const [teachers] = useTeachers();
    

    const searchTeacher = teachers.find(teacher => parseInt(teacher?._id) === parseInt(id));

    // const {_id, first_name,last_name, img, email} = searchTeacher;

    console.log(searchTeacher);
    return (
        <div>
            <img src={searchTeacher?.img_link} alt="" />
            <h2>{searchTeacher?.first_name}</h2>

        </div>
    );
};

export default TeacherDetails;