import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteTeacherAndUpdate = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/teacher')
        .then(res => res.json())
        .then(data => setUsers(data));

    }, [])

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            console.log('Deleting user with id,', id);
            const url = `http://localhost:5000/teacher/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h2>Available Teachers: {users.length}</h2>
            <ul>
                {
                    users.map(user=> <li
                    key={user._id}
                    >{user.first_name}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li> )
                }
            </ul>
            
        </div>
    );
};

export default DeleteTeacherAndUpdate;