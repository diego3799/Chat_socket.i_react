import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";
import UserProvider from "./components/contex";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <UserProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/room/:id" component={Room} />
          </Switch>
        </UserProvider>
      </Provider>
    </Router>
  );
}

export default App;
