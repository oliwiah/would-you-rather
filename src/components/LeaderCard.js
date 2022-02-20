import React from 'react';
import { useSelector } from 'react-redux';

import { Card, CardGroup, Image, Badge } from 'react-bootstrap';
import '../styles/questionCard.css';

const Leader = (props) => {
    const leader = useSelector(state => state.users[props.id])
    const avatar = leader.avatarURL
    const answeredQuestions = Object.keys(leader.answers).length
    const createdQuestions = leader.questions.length
    const score = answeredQuestions + createdQuestions

    return (
        <CardGroup>
            <Card>
            <div className="user-card">
            <Image variant="top" roundedCircle="true" src={avatar} />
            <Card.Body>
                <Card.Title>{leader.name}</Card.Title>
                <Badge bg="secondary">Score: {score}</Badge>
                <Card.Text>Answered questions: {answeredQuestions}</Card.Text>
                <Card.Text>Created questions: {createdQuestions}</Card.Text>
            </Card.Body>
            </div>
            </Card>
        </CardGroup>
    );
};

export default Leader;
