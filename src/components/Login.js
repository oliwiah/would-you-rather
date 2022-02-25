import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button, Card, CardGroup } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';

const Login = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const userIds = Object.keys(users);
    const [selectedUser, setSelectedUser] = useState(userIds[0]);

    const changeUser = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(selectedUser));
    };

    return (
        <CardGroup>
            <Card>
                <Card.Title>Welcome to the Would-you-rather app!</Card.Title>

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
            </Card>
        </CardGroup>
    );
};

export default Login;
