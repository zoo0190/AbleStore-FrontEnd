import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Components/Organisms/Footer/Footer";
import CategoryPost from "./Pages/CategoryBoard/CategoryPost";
import BoardDetail from "./Pages/Users/BoardDetail";
import EditUser from "./Pages/Users/EditUser";
import CategoryList from "./Pages/CategoryList/CategoryList";
import MyPage from "./Pages/MyPage/MyPage";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/categoryPost/:categoryId" component={CategoryPost} />
          <Route exact path="/boardDetail/:categoryId/:boardId" component={BoardDetail} />
          <Route exact path="/user/edit/:categoryId/:boardId" component={EditUser} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/forum/1" component={CategoryList} />
          <Route exact path="/user/:avatarId/profile/topic" component={MyPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
