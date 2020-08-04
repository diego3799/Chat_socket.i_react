import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <Provider store={store}>

          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute  path="/room/:id" component={Room} />
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
