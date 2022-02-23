import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Header from './Header';
import Questions from './Questions';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';

const App = () => {
    const dispatch = useDispatch();
    const authedUser = useSelector((state) => state.authedUser);
    const loading = useSelector((state) => Object.keys(state.users).length === 0);

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <LoadingBar style={{ backgroundColor: '#5BC0DE' }} />
            ) : (
                <Router>
                    <React.Fragment>
                        {authedUser === null ? (
                            <Login />
                        ) : (
                            <>
                                <Header />
                                <Routes>
                                    <Route path="/" exact element={<Questions />} />
                                    <Route path="/questions/:id" exact element={<Question />} />
                                    <Route path="/leaderboard" exact element={<LeaderBoard />} />
                                    <Route path="/add" exact element={<NewQuestion />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </>
                        )}
                    </React.Fragment>
                </Router>
            )}
        </>
    );
};

export default App;
