import React from 'react';
import { Tab } from 'semantic-ui-react';

export class Dashboard extends React.Component {

    render() {
        return <Tab panes={panes} />
    }
}

const panes = () => {
    return [
        {
            menuItem: 'Unanswered',
            render: () => (
              <Tab.Pane>
                {userQuestionData.answered.map(question => (
                  <UserCard
                    key={question.id}
                    question_id={question.id}
                    unanswered={true}
                  />
                ))}
              </Tab.Pane>
            )
          },
          {
            menuItem: 'Answered',
            render: () => (
              <Tab.Pane>
                {userQuestionData.unanswered.map(question => (
                  <UserCard
                    key={question.id}
                    question_id={question.id}
                    unanswered={false}
                  />
                ))}
              </Tab.Pane>
            )
          }
    ]
};
