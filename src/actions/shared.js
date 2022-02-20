import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, addUserQuestion, answerQuestion } from './users';
import { receiveQuestions, addQuestion, addQuestionAnswer } from './questions';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = null;

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
            .catch(function (error) {
                alert('There was an error loading initial data: ', error);
            });
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(question));
                dispatch(hideLoading());
            })
            .catch(function (error) {
                alert('There was an error adding new question:', error);
            });
    };
}

export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
            .then(() => {
                dispatch(answerQuestion(authedUser, qid, answer));
                dispatch(addQuestionAnswer(authedUser, qid, answer));
                dispatch(hideLoading());
            })
            .catch(function (error) {
                alert('There was an error answering a question: ', error);
            });
    };
}
