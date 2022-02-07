import React, { useSelector } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card, CardGroup, Button, Image } from 'react-bootstrap';
import '../styles/questionCard.css';

const QuestionCard = (props) => {
    // const question = useSelector(state => state.questions[props.id]);
    // console.log('QUESTIONCARD ===>', useSelector(state));
    // const { id, author, optionOne, optionTwo } = question

    const navigate = useNavigate();
    const question = useSelector((state) => state.questions[props.id]);
    const users = useSelector((state) => state.users);
    const { id, author, optionOne, optionTwo } = question;

    const avatar = users[question.author].avatarURL;
    // console.log('PROPS QUESTIONCARD ----=>', props)
    // const { name, avatar, text, id } = props;
    const viewQuestion = () => {
        navigate(`/questions/${id}`);
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
export default QuestionCard;
