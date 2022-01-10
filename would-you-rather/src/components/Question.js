import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

import { handleAnswerQuestion } from '../actions/shared';
import { Card, CardGroup, Image, ProgressBar, Badge } from 'react-bootstrap';
import '../styles/questionCard.css';

export const Question = (props) => {
    const [option, setOption] = useState('');
    const [submit, setSubmit] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(handleAnswerQuestion());
    }, [dispatch]);

    // // temp - TODO: get this from store
    // const question_id = 'xj352vofupe1dqz9emx13r';
    // const questions = tempQuestions;
    // const authedUser = 'tylermcginnis';

    const { authedUser, questions, users } = props;
    console.log('props ===>', props);
    const question = questions[props.match.params.question_id];

    const handleSelection = (option) => {
        setOption(option);
        setSubmit(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        dispatch(handleAnswerQuestion(props.match.params.question_id, option));
        navigate(`/questions/${props.match.params.question_id}`);
    };

    const getPercent = (numberVotes, totalVotes) => {
        let percent = 0;
        if (numberVotes > 0) {
            percent = Math.round((numberVotes / totalVotes) * 100);
        }
        return percent;
    };

    if (!question) {
        return <Navigate to="/404" />;
    }

    const totalVoteNum = question.optionOne.votes.length + question.optionTwo.votes.length;
    const questionOneVotePercent = getPercent(question.optionOne.votes.length, totalVoteNum);
    const questionTwoVotePercent = getPercent(question.optionTwo.votes.length, totalVoteNum);

    if (
        question.optionOne.votes.indexOf(authedUser) !== -1 ||
        question.optionTwo.votes.indexOf(authedUser) !== -1
    ) {
        return (
            <CardGroup>
                <Card>
                    <Card.Title>{users[question.author].name} asks:</Card.Title>
                    <div className="user-card">
                        <Image
                            variant="top"
                            roundedCircle="true"
                            src={users[question.author].avatarURL}
                        />
                        <Card.Body>
                            <Card.Text>
                                <h3>Results</h3>

                                <hr />

                                <div className="result-option">
                                    <h4>{question.optionOne.text}</h4>
                                    {question.optionOne.votes.indexOf(authedUser) !== -1 ? (
                                        <Badge bg="secondary">Your choice</Badge>
                                    ) : (
                                        false
                                    )}
                                </div>
                                <ProgressBar
                                    striped
                                    variant="success"
                                    now={questionOneVotePercent}
                                    label={`${questionOneVotePercent}%`}
                                />
                                <h6>
                                    {question.optionOne.votes.length} out of {totalVoteNum}{' '}
                                    {totalVoteNum > 1 ? 'votes' : 'vote'}
                                </h6>

                                <br />

                                <div className="result-option">
                                    <h4>{question.optionTwo.text}</h4>
                                    {question.optionTwo.votes.indexOf(authedUser) !== -1 ? (
                                        <Badge bg="secondary">Your choice</Badge>
                                    ) : (
                                        false
                                    )}
                                </div>
                                <ProgressBar
                                    striped
                                    variant="success"
                                    now={questionTwoVotePercent}
                                    label={`${questionTwoVotePercent}%`}
                                />
                                <h6>
                                    {question.optionTwo.votes.length} out of {totalVoteNum}{' '}
                                    {totalVoteNum > 1 ? 'votes' : 'vote'}
                                </h6>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </CardGroup>
        );
    }

    return (
        <header>
            <p>This is Question</p>
        </header>
    );
};

// temporarly here
const tempQuestions = {
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

const users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
        answers: {
            '8xf0y6ziyjabvozdd253nd': 'optionOne',
            '6ni6ok3ym7mf1p33lnez': 'optionOne',
            am8ehyc8byjqgar0jgpub9: 'optionTwo',
            loxhs1bqm25b708cmbf3g: 'optionTwo',
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://randomuser.me/api/portraits/men/46.jpg',
        answers: {
            vthrdm985a262al8qx3do: 'optionOne',
            xj352vofupe1dqz9emx13r: 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://randomuser.me/api/portraits/men/54.jpg',
        answers: {
            xj352vofupe1dqz9emx13r: 'optionOne',
            vthrdm985a262al8qx3do: 'optionTwo',
            '6ni6ok3ym7mf1p33lnez': 'optionOne',
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
};
// e.o. temporary

function mapStateToProps({ questions, users, authedUser }) {
    return {
        authedUser,
        questions,
        users,
    };
}

export default connect(mapStateToProps)(Question);
