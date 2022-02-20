import { RECEIVE_USERS, ADD_USER_QUESTION, ANSWER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case ANSWER_QUESTION :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.questionID]: action.option
                    }
                }
            }
        default:
            return state
    }
}
