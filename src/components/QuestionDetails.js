import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, CardGroup, Button, Image, Form } from 'react-bootstrap';
import { handleAnswerQuestion } from '../actions/shared';
import '../styles/questionCard.css';

const QuestionDetails = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const question = useSelector((state) => state.questions[props.id]);
    const users = useSelector((state) => state.users);
    const authedUser = useSelector((state) => state.authedUser);
    const [answer, setAnswer] = useState(null);
    const { author, optionOne, optionTwo } = question;
    const avatar = users[question.author].avatarURL;

    const handleChange = (event) => {
        setAnswer(event.target.id);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { id } = props;

        dispatch(
            handleAnswerQuestion(
                authedUser,
                id,
                answer,
            )
        );
        navigate(`/questions/${id}`);
    };

    if (props === null) {
        return <p>This question does not exist.</p>;
    }
    return (
        <CardGroup>
            <Card>
                <Card.Title style={{ fontSize: '1.5em' }}>{author} asks:</Card.Title>
                <div className="user-card">
                    <Image variant="top" roundedCircle="true" src={avatar} />
                    <Card.Body>
                        <Card.Text style={{ fontSize: '1.5em' }}>Would you rather...</Card.Text>
                        <Form>
                            <Form.Check
                                type="radio"
                                label={optionOne.text}
                                id='optionOne'
                                checked={answer === 'optionOne'}
                                onChange={handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label={optionTwo.text}
                                id='optionTwo'
                                checked={answer === 'optionTwo'}
                                onChange={handleChange}
                            />
                            <br/>
                            <Button color="info" onClick={handleSubmit} disabled={answer === null}>
                                Vote
                            </Button>
                        </Form>
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
    );
};

export default QuestionDetails;
