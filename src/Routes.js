import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Components/organisms/Footer/Footer";
import CategoryPost from "./Pages/CategoryBoard/CategoryPost";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/CategoryPost" component={CategoryPost} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
