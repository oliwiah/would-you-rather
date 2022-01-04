import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, CardGroup } from 'react-bootstrap';

export const QuestionCard = (props) => {
    const navigate = useNavigate();
    const { name, avatar, text, id } = props;

    const viewQuestion = (id) => {
        navigate(`/questions/${id}`);
    };

    if (props === null) {
        return <p>This question does not exist.</p>;
    }

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
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

const usersTmp = {
    "sarahedo": {
        "id": "sarahedo",
        "name": "Sarah Edo",
        "avatarURL": "https://randomuser.me/api/portraits/women/3.jpg",
        "answers": {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            "am8ehyc8byjqgar0jgpub9": "optionTwo",
            "loxhs1bqm25b708cmbf3g": "optionTwo"
        },
        "questions": [
            "8xf0y6ziyjabvozdd253nd",
            "am8ehyc8byjqgar0jgpub9"
        ]
    },
    "tylermcginnis": {
        "id": "tylermcginnis",
        "name": "Tyler McGinnis",
        "avatarURL": "https://randomuser.me/api/portraits/men/46.jpg",
        "answers": {
            "vthrdm985a262al8qx3do": "optionOne",
            "xj352vofupe1dqz9emx13r": "optionTwo"
        },
        "questions": [
            "loxhs1bqm25b708cmbf3g",
            "vthrdm985a262al8qx3do"
        ]
    },
    "johndoe": {
        "id": "johndoe",
        "name": "John Doe",
        "avatarURL": "https://randomuser.me/api/portraits/men/54.jpg",
        "answers": {
            "xj352vofupe1dqz9emx13r": "optionOne",
            "vthrdm985a262al8qx3do": "optionTwo",
            "6ni6ok3ym7mf1p33lnez": "optionOne"
        },
        "questions": [
            "6ni6ok3ym7mf1p33lnez",
            "xj352vofupe1dqz9emx13r"
        ]
    }
}
// e.o. temporary

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
