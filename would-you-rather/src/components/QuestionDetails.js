import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, CardGroup, Button, Image } from 'react-bootstrap';
import { addQuestionAnswer } from '../actions/questions';
import '../styles/questionCard.css';

const QuestionDetails = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const question = useSelector(state => state.questions[props.id])
    const users = useSelector(state => state.users)
    const authedUser = useSelector(state => state.authedUser)
    const [answer, setAnswer] = useState(null)

    const avatar = users[question.author].avatarURL

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { id } = props

        dispatch(addQuestionAnswer({
            authedUser,
            qid: id,
            answer
        }))
    }

    const { author, optionOne, optionTwo } = question

    const viewQuestion = () => {
        navigate(`/questions/${props.id}`);
    };

    if (props === null) {
        return <p>This question does not exist.</p>;
    }
    return (
        <CardGroup>
            <Card>
                <Card.Title>{author} asks:</Card.Title>
                <div className="user-card">
                    <Image variant="top" roundedCircle="true" src={avatar} />
                    <Card.Body>
                        <Card.Text>
                            <h4>Would you rather...</h4>
                            {optionOne.text.substring(0, 20)} or
                            {optionTwo.text.substring(0, 20)}
                        </Card.Text>
                        <Button variant="outline-primary" onClick={viewQuestion}>
                            View pool
                        </Button>{' '}
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
    );
};

export default QuestionDetails;
