import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate, useParams } from 'react-router-dom';

import { handleAnswerQuestion } from '../actions/shared';
import QuestionDetails from './QuestionDetails';
import QuestionResult from './QuestionResult';
import '../styles/questionCard.css';

export const Question = props => {
    // const [option, setOption] = useState('');
    // const [submit, setSubmit] = useState(true);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const authedUser = useSelector(state => state.authedUser);
    const user = useSelector(state => state.users[authedUser]);
    // const users = useSelector(state => state.users);
    const questions = useSelector(state => state.questions);
    const { id } = useParams();
    const answered = (user.answers).hasOwnProperty(id);


    // useEffect(() => {
    //     dispatch(handleAnswerQuestion());
    // }, [dispatch]);

    // const { users } = props;
    // const question = questions[question_id];

    // const handleSelection = (option) => {
    //     setOption(option);
    //     setSubmit(false);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const { id } = props
    //     setSubmit(true);
    //     dispatch(handleAnswerQuestion(questions[props.id], option));
    //     navigate(`/questions/${props.id}`);
    // };

    if (!questions[id]) {
        return <Navigate to="/404" />;
    }

    if (
        !answered
        // questions[id].optionOne.votes.indexOf(authedUser) !== -1 ||
        // questions[id].optionTwo.votes.indexOf(authedUser) !== -1
    ) {
        return (
            <QuestionResult />
        )
    } else {
        return (
            <QuestionDetails />
        )
    }


};

// function mapStateToProps({ questions, users, authedUser }, { id }) {
//     return {
//         authedUser,
//         questions,
//         users,
//     };
// }

// export default connect(mapStateToProps)(Question);
export default Question;
