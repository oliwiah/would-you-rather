import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardGroup, Image, ProgressBar, Badge } from 'react-bootstrap';

const QuestionResult = (props) => {
    const authedUser = useSelector((state) => state.authedUser);
    const users = useSelector((state) => state.users);
    const question = useSelector((state) => state.questions[props.id]);
    const { author, optionOne, optionTwo } = question;

    const getPercent = (numberVotes, totalVotes) => {
        let percent = 0;
        if (numberVotes > 0) {
            percent = Math.round((numberVotes / totalVotes) * 100);
        }
        return percent;
    };

    const totalVoteNum = optionOne.votes.length + optionTwo.votes.length;
    const questionOneVotePercent = getPercent(optionOne.votes.length, totalVoteNum);
    const questionTwoVotePercent = getPercent(optionTwo.votes.length, totalVoteNum);

    return (
        <CardGroup>
            <Card>
                <Card.Title style={{ fontSize: '1.5em' }}>{users[author].name} asks:</Card.Title>
                <div className="user-card">
                    <Image variant="top" roundedCircle="true" src={users[author].avatarURL} />
                    <Card.Body>
                        <Card.Text style={{ fontSize: '1.5em' }}>Results</Card.Text>
                        <hr />

                        <div className="result-option">
                            <Card.Text style={{ fontSize: '1em' }}>{optionOne.text}</Card.Text>
                            {optionOne.votes.indexOf(authedUser) !== -1 ? (
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
                        <Card.Text style={{ fontSize: '0.67em' }}>
                            {optionOne.votes.length} out of {totalVoteNum}{' '}
                            {totalVoteNum > 1 ? 'votes' : 'vote'}
                        </Card.Text>

                        <br />

                        <div className="result-option">
                            <Card.Text style={{ fontSize: '1em' }}>{optionTwo.text}</Card.Text>
                            {optionTwo.votes.indexOf(authedUser) !== -1 ? (
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
                        <Card.Text style={{ fontSize: '0.67em' }}>
                            {optionTwo.votes.length} out of {totalVoteNum}{' '}
                            {totalVoteNum > 1 ? 'votes' : 'vote'}
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </CardGroup>
    );
};

export default QuestionResult;
