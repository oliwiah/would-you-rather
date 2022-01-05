import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, CardGroup, Button, Image } from 'react-bootstrap';
import '../styles/questionCard.css';

export const QuestionCard = (props) => {
    const navigate = useNavigate();
    // const { name, avatar, text, id } = props;

    //temp
    const name = 'ali';
    const avatar = 'https://randomuser.me/api/portraits/women/3.jpg';
    const text = 'sdfg';
    const id = 'tylermcginnis';
    //e.o. temp

    const viewQuestion = (id) => {
        navigate(`/questions/${id}`);
    };

    if (props === null) {
        return <p>This question does not exist.</p>;
    }

    return (
        <>
        <CardGroup>
            <Card>
                <Card.Title>{name} asks:</Card.Title>
                <div className="user-card">
                    <Image variant="top" roundedCircle="true" fluid="true" src={avatar} />
                    <Card.Body>
                        <Card.Text>
                            <h4>Would you rather...</h4>
                            ...{text}
                        </Card.Text>
                        <Button variant="outline-primary" onClick={viewQuestion}>View pool</Button>{' '}
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
        </>
    );
};

// temporarly here
const questions = {
    '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory',
        },
    },
    '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillian',
        },
    },
    am8ehyc8byjqgar0jgpub9: {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic',
        },
    },
    loxhs1bqm25b708cmbf3g: {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer',
        },
    },
    vthrdm985a262al8qx3do: {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500',
        },
    },
    xj352vofupe1dqz9emx13r: {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift',
        },
    },
};

// function mapStateToProps({ questions, users }, { id }) {
//     const question = questions[id];

//     return {
//         name: users[question.author].name,
//         text: question.optionOne.text,
//         avatar: users[question.author].avatarURL,
//         id: question.id,
//     };
// }

// export default connect(mapStateToProps)(QuestionCard);
