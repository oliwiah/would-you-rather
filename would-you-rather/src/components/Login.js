import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const { users, userIds } = props;

    const changeUser = (e) => {
        const user = e.target.value;
        setUser(user);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(user));
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the Would-you-rather app!</h1>

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="login">Login to continue</Form.Label>
                    <Form.Select size="lg" id="login" onChange={changeUser} value={user}>
                        <option key="initialText" value="" disabled>
                            Choose user
                        </option>
                        {userIds.map((userId) => (
                            <option key={userId} value={userId}>
                                {users[userId].name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit" disabled={user === ''}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
        users,
    };
}

export default connect(mapStateToProps)(Login);
