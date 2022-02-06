import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

import QuestionCard from './QuestionCard';
import '../styles/questions.css';

const Questions = (props) => {
    const authedUser = useSelector((state) => state.authedUser);
    const questions = useSelector((state) => state.questions);
    const [activeTab, setActiveTab] = useState('unanswered');
    // const { orderedQuestions } = props;

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
                        // .filter(
                        //     (question) =>
                        //         question.optionOneAnswered !== true &&
                        //         question.optionTwoAnswered !== true
                        // )
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
                    {answeredQuestions
                        // .filter(
                        //     (question) =>
                        //         question.optionOneAnswered === true ||
                        //         question.optionTwoAnswered === true
                        // )
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

// function mapStateToProps({ questions, authedUser }) {
//     return {
//         orderedQuestions: Object.keys(questions)
//             .map((question) => {
//                 return {
//                     ...questions[question],
//                     optionOneAnswered:
//                         questions[question].optionOne.votes.indexOf(authedUser) === -1
//                             ? false
//                             : true,
//                     optionTwoAnswered:
//                         questions[question].optionTwo.votes.indexOf(authedUser) === -1
//                             ? false
//                             : true,
//                 };
//             })
//             .sort((a, b) => b.timestamp - a.timestamp),
//     };
// }

// export default connect(mapStateToProps)(Questions);
export default Questions;
