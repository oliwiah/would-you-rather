import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);
    const userIds = Object.keys(users);
    const [selectedUser, setSelectedUser] = useState(userIds[0]);

    const changeUser = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(selectedUser));
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the Would-you-rather app!</h1>

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="login">Login to continue</Form.Label>
                    <Form.Select size="lg" id="login" onChange={changeUser} value={selectedUser}>
                        <option key="initialText" disabled>
                            Choose user
                        </option>
                        {userIds.map((userId) => (
                            <option key={userId} value={userId}>
                                {users[userId].name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit" disabled={selectedUser === null}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
