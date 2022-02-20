import React from 'react';
import { useSelector } from 'react-redux';
import Leader from './LeaderCard';
import '../styles/leaderBoard.css'

const LeaderBoard = () => {
    const users = useSelector(state => state.users)
    const sortedUsers = Object.values(users).map(user => ({
        score: Object.keys(user.answers).length + Object.keys(user.questions).length,
        ...user
    })).sort((a, b) => b.score - a.score)

    return (
        <ul>
            {sortedUsers.map(user => (
                <li key={user.id}>
                    <Leader id={user.id} />
                </li>
            ))}
        </ul>
    );
};

export default LeaderBoard;
