import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Components/Organisms/Footer/Footer";
import CategoryPost from "./Pages/CategoryBoard/CategoryPost";
import BoardDetail from "./Pages/Users/BoardDetail";
import EditUser from "./Pages/Users/EditUser";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/categoryPost" component={CategoryPost} />
          <Route exact path="/boardDetail/:id" component={BoardDetail} />
          <Route exact path="/user/edit/:id" component={EditUser} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
