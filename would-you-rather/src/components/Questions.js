import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

import QuestionDetails from './QuestionDetails';
import QuestionResult from './QuestionResult';
import '../styles/questions.css';

const Questions = () => {
    const authedUser = useSelector((state) => state.authedUser);
    const questions = useSelector((state) => state.questions);
    const [activeTab, setActiveTab] = useState('unanswered');

    const orderedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);

    const unansweredQuestions = orderedQuestions.filter(
        (question) =>
            !question.optionOne.votes.includes(authedUser) &&
            !question.optionTwo.votes.includes(authedUser)
    );

    const answeredQuestions = orderedQuestions.filter(
        (question) =>
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)
    );

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
                    {unansweredQuestions
                        .map((question) => {
                            return (
                                <div className="box" key={question.id}>
                                    <QuestionDetails id={question.id} />
                                </div>
                            );
                        })}
                </div>
            ) : (
                <div>
                    {answeredQuestions
                        .map((question) => {
                            return (
                                <div className="box" key={question.id}>
                                    <QuestionResult id={question.id} />
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default Questions;
