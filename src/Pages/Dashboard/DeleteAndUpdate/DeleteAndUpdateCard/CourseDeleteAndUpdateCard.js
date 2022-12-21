import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../../../hooks/useCourses';

const CourseDeleteAndUpdateCard = (props) => {
    const {_id,heading} = props.course;
    const [courses, setCourses] = useCourses();
    const handleCourseDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            console.log('Deleting course with id,', id);
            const url = `https://e-learning-management-system-git-095dad-subrotadey540-gmailcom.vercel.app/course/${id}`
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
        <div className='d-flex justify-content-between my-3 py-2 rounded' style={{border:'2px solid black'}}>
            <div className='d-flex'>
                <h6>{heading}</h6> <small> =`{'>>'}`ID({_id})</small>
            </div>
            <div className='d-flex justify-content-end'>
                <div>
                    <Link className="m-3" to={`/updateCourse/${_id}`}><button className=" btn btn-info">Update</button></Link>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => handleCourseDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDeleteAndUpdateCard;