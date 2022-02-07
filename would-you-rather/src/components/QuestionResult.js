import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardGroup, Image, ProgressBar, Badge } from 'react-bootstrap';


const QuestionResult = props => {
    console.log('PROPS =========> ', props);
    const authedUser = useSelector(state => state.authedUser);
    const users = useSelector(state => state.users);
    const question = useSelector(state => state.questions[props.id])
    const questions = useSelector(state => state.questions);
    const { author, optionOne, optionTwo } = question

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
                <Card.Title>{users[author].name} asks:</Card.Title>
                <div className="user-card">
                    <Image
                        variant="top"
                        roundedCircle="true"
                        src={users[author].avatarURL}
                    />
                    <Card.Body>
                        <Card.Text>
                            <h3>Results</h3>

                            <hr />

                            <div className="result-option">
                                <h4>{optionOne.text}</h4>
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
                            <h6>
                                {optionOne.votes.length} out of {totalVoteNum}{' '}
                                {totalVoteNum > 1 ? 'votes' : 'vote'}
                            </h6>

                            <br />

                            <div className="result-option">
                                <h4>{optionTwo.text}</h4>
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
                            <h6>
                                {optionTwo.votes.length} out of {totalVoteNum}{' '}
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
