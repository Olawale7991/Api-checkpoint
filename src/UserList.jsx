import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; 
import './UserList.css'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
