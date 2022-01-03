import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import middleware from "./middleware";
import reducer from "./reducers";
import { createStore } from "redux";
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
