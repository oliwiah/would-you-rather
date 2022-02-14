import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { resetAuthedUser } from '../actions/authedUser';

export const Header = () => {
    const dispatch = useDispatch();
    const authedUser = useSelector((state) => state.authedUser);
    const users = useSelector((state) => state.users);
    const avatar = users[authedUser]?.avatarURL;

    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">Would you rather...?</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="me-auto">
                <Nav.Link href="/newquestion">New question</Nav.Link>
            </Nav>
            <Nav className="me-auto">
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            </Nav>
            {authedUser === null ? (
                <Nav className="me-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            ) : (
                <>
                    <NavbarBrand>
                        <img src={avatar} alt='Avatar' width='35'></img>
                    </NavbarBrand>
                    <Nav>Hello, {authedUser}!</Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/logout" onClick={() => dispatch(resetAuthedUser())}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </>
            )}
            </Container>
        </Navbar>
    );
};

export default Header;
