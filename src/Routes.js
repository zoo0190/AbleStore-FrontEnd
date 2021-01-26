import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import Footer from "./Components/Organisms/Footer/Footer";
import CategoryPost from "./Pages/CategoryBoard/CategoryPost";
import BoardDetail from "./Pages/Users/BoardDetail";
import EditUser from "./Pages/Users/EditUser";
import CategoryList from "./Pages/CategoryList/CategoryList"
import MyPage from "./Pages/MyPage/MyPage";

// import Footer from "./Components/Organisms/Footer/Footer";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/categoryPost" component={CategoryPost} />
          <Route exact path="/boardDetail/:id" component={BoardDetail} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/SignUp" component={Signup} />
          <Route exact path="/forum" component={CategoryList} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
