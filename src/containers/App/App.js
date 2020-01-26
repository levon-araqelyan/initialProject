import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>Initial project</div>
      </Router>
    </Provider>
  );
};

export default App;
