import React, { useState } from 'react';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

import { QuestionCard } from './QuestionCard';
import '../styles/questions.css';

const Questions = (props) => {
    const [activeTab, setActiveTab] = useState('unanswered');
    const { orderedQuestions } = props;

    return (
        <div className="questions">
            <p className="headline">Below you can filter in between questions</p>

            <Nav fill variant="tabs" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="unanswered">Unanswered questions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="answered">Answered questions</Nav.Link>
                </Nav.Item>
            </Nav>

            {activeTab === 'unanswered' ? (
                <div>
                    {orderedQuestions
                        .filter(
                            (question) =>
                                question.optionOneAnswered !== true &&
                                question.optionTwoAnswered !== true
                        )
                        .map((question) => {
                            return (
                                <div className="box" key={question.id}>
                                    <QuestionCard id={question.id} />
                                </div>
                            );
                        })}
                </div>
            ) : (
                <div>
                    {orderedQuestions
                        .filter(
                            (question) =>
                                question.optionOneAnswered === true ||
                                question.optionTwoAnswered === true
                        )
                        .map((question) => {
                            return (
                                <div className="box" key={question.id}>
                                    <QuestionCard id={question.id} />
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

// temporarly here
const questions = {
    "8xf0y6ziyjabvozdd253nd": {
        "id": "8xf0y6ziyjabvozdd253nd",
        "author": "sarahedo",
        "timestamp": 1467166872634,
        "optionOne": {
            "votes": [
                "sarahedo"
            ],
            "text": "have horrible short term memory"
        },
        "optionTwo": {
            "votes": [],
            "text": "have horrible long term memory"
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        "id": "6ni6ok3ym7mf1p33lnez",
        "author": "johndoe",
        "timestamp": 1468479767190,
        "optionOne": {
            "votes": [],
            "text": "become a superhero"
        },
        "optionTwo": {
            "votes": [
                "johndoe",
                "sarahedo"
            ],
            "text": "become a supervillian"
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        "id": "am8ehyc8byjqgar0jgpub9",
        "author": "sarahedo",
        "timestamp": 1488579767190,
        "optionOne": {
            "votes": [],
            "text": "be telekinetic"
        },
        "optionTwo": {
            "votes": [
                "sarahedo"
            ],
            "text": "be telepathic"
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        "id": "loxhs1bqm25b708cmbf3g",
        "author": "tylermcginnis",
        "timestamp": 1482579767190,
        "optionOne": {
            "votes": [],
            "text": "be a front-end developer"
        },
        "optionTwo": {
            "votes": [
                "sarahedo"
            ],
            "text": "be a back-end developer"
        }
    },
    "vthrdm985a262al8qx3do": {
        "id": "vthrdm985a262al8qx3do",
        "author": "tylermcginnis",
        "timestamp": 1489579767190,
        "optionOne": {
            "votes": [
                "tylermcginnis"
            ],
            "text": "find $50 yourself"
        },
        "optionTwo": {
            "votes": [
                "johndoe"
            ],
            "text": "have your best friend find $500"
        }
    },
    "xj352vofupe1dqz9emx13r": {
        "id": "xj352vofupe1dqz9emx13r",
        "author": "johndoe",
        "timestamp": 1493579767190,
        "optionOne": {
            "votes": [
                "johndoe"
            ],
            "text": "write JavaScript"
        },
        "optionTwo": {
            "votes": [
                "tylermcginnis"
            ],
            "text": "write Swift"
        }
    }
};
// e.o. temporary

// function mapStateToProps({ questions, authedUser }) {
function mapStateToProps({ authedUser }) {
    return {
        orderedQuestions: Object.keys(questions)
            .map((question) => {
                return {
                    ...questions[question],
                    optionOneAnswered:
                        questions[question].optionOne.votes.indexOf(authedUser) === -1
                            ? false
                            : true,
                    optionTwoAnswered:
                        questions[question].optionTwo.votes.indexOf(authedUser) === -1
                            ? false
                            : true,
                };
            })
            .sort((a, b) => b.timestamp - a.timestamp),
    };
}

export default connect(mapStateToProps)(Questions);
