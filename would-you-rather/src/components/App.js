import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Login } from "./Login";
import { Header } from "./Header";
import { Question } from "./Question";
import { Questions } from './Questions';
import { Leaderboard } from "./Leaderboard";
import { NewQuestion } from "./NewQuestion";
import { Logout } from "./Logout";
import { NotFound } from "./NotFound";
class App extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Routes>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Questions} />
            <Route
              exact
              path="/questions/:question_id"
              component={Question}
            />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/newquestion" component={NewQuestion} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Routes>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
