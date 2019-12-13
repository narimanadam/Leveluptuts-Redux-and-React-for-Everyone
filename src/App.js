/* eslint react/no-did-mount-set-state: 0 */
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { save, load } from "redux-localstorage-simple";

import logger from "redux-logger";
import thunk from "redux-thunk";

import logo from "./logo.svg";
import "./App.css";

import MoviesList from "./movies/MoviesList";
import Toggle from "./toggle/Toggle";
import MovieDetail from "./movies/MovieDetail";
import rootReducer from "./rootReducer";

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  load(),
  compose(
    applyMiddleware(...middleware, save()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
