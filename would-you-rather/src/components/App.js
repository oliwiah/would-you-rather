import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import { Header } from './Header';
import Questions from './Questions';
import { Question } from './Question';
import { Leaderboard } from './Leaderboard';
import { NewQuestion } from './NewQuestion';
import { Logout } from './Logout';
import { NotFound } from './NotFound';
import authedUser from '../reducers/authedUser';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <Router>
            <React.Fragment>
                <Header />
                {authedUser === null ? (
                    <Login />
                ) : (
                    <Routes>
                      {/* To remove login route */}
                        <Route path="/login" element={<Login />} />
                        <Route exact path="/" element={<Questions />} />
                        <Route exact path="/questions/:question_id" element={<Question />} />
                        <Route exact path="/leaderboard" element={<Leaderboard />} />
                        <Route exact path="/newquestion" element={<NewQuestion />} />
                        <Route exact path="/logout" element={<Logout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
            </React.Fragment>
        </Router>
    );
};

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    };
}

export default connect(mapStateToProps)(App);
