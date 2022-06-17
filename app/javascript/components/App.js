import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Greeting from "./Greeting";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
        <Router>
          <Routes>
           <Route exact path="/" element={ ('Hello') } />
           <Route path="/greating" element={<Greeting />} />
          </Routes>
        </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
