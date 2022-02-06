import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import { Header } from './Header';
import Questions from './Questions';
import { Question } from './Question';
import { Leaderboard } from './Leaderboard';
import { NewQuestion } from './NewQuestion';
import { Logout } from './Logout';
import { NotFound } from './NotFound';

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
                        <Header />
                        {authedUser === null ? (
                            <Login />
                        ) : (
                            <Routes>
                                <Route exact path="/" element={<Questions />} />
                                <Route exact path="/questions/:id" element={<Question />} />
                                <Route exact path="/leaderboard" element={<Leaderboard />} />
                                <Route exact path="/newquestion" element={<NewQuestion />} />
                                <Route exact path="/logout" element={<Logout />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        )}
                    </React.Fragment>
                </Router>
            )}
        </>
    );
};

// function mapStateToProps({ authedUser }) {
//     return {
//         authedUser,
//     };
// }

// export default connect(mapStateToProps)(App);
export default App;
