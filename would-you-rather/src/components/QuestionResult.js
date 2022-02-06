import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardGroup, Image, ProgressBar, Badge } from 'react-bootstrap';


const QuestionResult = props => {
    const authedUser = useSelector(state => state.authedUser);
    const users = useSelector(state => state.users);
    const questions = useSelector(state => state.questions);

    const totalVoteNum = questions[props.id].optionOne.votes.length + questions[props.id].optionTwo.votes.length;
    const questionOneVotePercent = getPercent(questions[props.id].optionOne.votes.length, totalVoteNum);
    const questionTwoVotePercent = getPercent(questions[props.id].optionTwo.votes.length, totalVoteNum);

    const getPercent = (numberVotes, totalVotes) => {
        let percent = 0;
        if (numberVotes > 0) {
            percent = Math.round((numberVotes / totalVotes) * 100);
        }
        return percent;
    };

    return (
        <CardGroup>
            <Card>
                <Card.Title>{users[questions[props.id].author].name} asks:</Card.Title>
                <div className="user-card">
                    <Image
                        variant="top"
                        roundedCircle="true"
                        src={users[questions[props.id].author].avatarURL}
                    />
                    <Card.Body>
                        <Card.Text>
                            <h3>Results</h3>

                            <hr />

                            <div className="result-option">
                                <h4>{questions[props.id].optionOne.text}</h4>
                                {questions[props.id].optionOne.votes.indexOf(authedUser) !== -1 ? (
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
                                {questions[props.id].optionOne.votes.length} out of {totalVoteNum}{' '}
                                {totalVoteNum > 1 ? 'votes' : 'vote'}
                            </h6>

                            <br />

                            <div className="result-option">
                                <h4>{questions[props.id].optionTwo.text}</h4>
                                {questions[props.id].optionTwo.votes.indexOf(authedUser) !== -1 ? (
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
                                {questions[props.id].optionTwo.votes.length} out of {totalVoteNum}{' '}
                                {totalVoteNum > 1 ? 'votes' : 'vote'}
                            </h6>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
    );
};

export default QuestionResult;
