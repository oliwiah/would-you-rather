import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

const NotFound = () => (
    <div className="screen404">
        <p className="heading">OOPS!</p>
        <p className="paragraph">We can't find the page you're looking for!</p>
        <button className="homePageButton" variant="outline-primary">
            <Link className="homepageLink" to="/">
                Visit homepage
            </Link>
        </button>
    </div>
);

export default NotFound;
