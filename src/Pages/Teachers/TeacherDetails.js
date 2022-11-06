import React from 'react';
import { useParams } from 'react-router-dom';

const TeacherDetails = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <h2>Details</h2>
        </div>
    );
};

export default TeacherDetails;