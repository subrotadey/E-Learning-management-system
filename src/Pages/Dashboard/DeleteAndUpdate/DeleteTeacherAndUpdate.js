import React from 'react';
import { Container} from 'react-bootstrap';
import useTeachers from '../../../hooks/useTeachers';
import TeacherDeleteAndUpdateCard from './DeleteAndUpdateCard/TeacherDeleteAndUpdateCard';

const DeleteTeacherAndUpdate = () => {
    const [teachers] = useTeachers();
    return (
        <div>
            <h2>Available Teachers: {teachers.length}</h2>
            <Container>
                {
                    teachers.map(teacher =><TeacherDeleteAndUpdateCard
                        key={teacher._id}
                        teacher={teacher}
                    ></TeacherDeleteAndUpdateCard>)
                }
            </Container>
        </div>
    );
};

export default DeleteTeacherAndUpdate;