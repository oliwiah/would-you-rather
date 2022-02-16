export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function addUserQuestion(questionID) {
    return {
        type: ADD_USER_QUESTION,
        questionID,
    };
}

export function updateUserQuestions(question) {
    return {
        type: UPDATE_USER_QUESTIONS,
        question,
    };
}

export function answerQuestion(authedUser, questionID, option) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        questionID,
        option,
    };
}
