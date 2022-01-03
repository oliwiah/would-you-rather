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

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Questions />} />
          <Route
            exact
            path="/questions/:question_id"
            element={<Question />}
          />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/newquestion" element={<NewQuestion />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
