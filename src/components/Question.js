import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import QuestionDetails from './QuestionDetails';
import QuestionResult from './QuestionResult';
import '../styles/questionCard.css';

const Question = () => {
    const authedUser = useSelector((state) => state.authedUser);
    const user = useSelector((state) => state.users[authedUser]);
    const questions = useSelector((state) => state.questions);
    const { id } = useParams();
    const answered = user.answers.hasOwnProperty(id);

    if (!questions[id]) {
        return <Navigate to="/404" />;
    } else if (answered) {
        return <QuestionResult id={id} />;
    } else {
        return <QuestionDetails id={id} />;
    }
};

export default Question;
