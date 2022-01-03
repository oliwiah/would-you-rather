import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState('none');
    // const { userIds } = this.props;
    // console.log(userIds);


    const changeUser = e => {
        const user = e.target.value;
        setUser(user);
    };

    const handleLogin = e => {
        e.preventDefault();
        dispatch(setAuthedUser(user));
        navigate('/');

    }

    return (
        <div>
            <h1>Welcome to Would-you-rather app!</h1>

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="login">Login to continue</Form.Label>
                    <Form.Select
                        size="lg"
                        id="login"
                        onChange={changeUser}
                        value={user}
                    >
                        <option key='none' value='none' disabled>
                            Choose user
                        </option>
                        <option>blabla</option>
                        {/* {this.props.userIds.map(userId => (
                            <option key={userId} value={userId}>
                                {this.props.users[userId].name}
                            </option>
                        ))} */}
                    </Form.Select>
                </Form.Group>
                <Button type="submit" disabled={user === 'none'}>Login</Button>
            </Form>
        </div>
    )
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
        users
    };
}

export default connect(mapStateToProps)(Login);
