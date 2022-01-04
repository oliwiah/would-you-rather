import React from 'react';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

export const Header = ({ authedUser, users }) => (
    <Nav fill variant="tabs">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/newquestion">New question</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
        </Nav.Item>
        {authedUser === null ? (
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
        ) : (
            <Nav.Item>
                <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav.Item>
        )}
    </Nav>
);

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users,
    };
}

export default connect(mapStateToProps)(Header);
