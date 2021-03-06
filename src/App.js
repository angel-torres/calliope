import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import Firebase from "./firebase";
import { loggedIn, loggedOut, checkingUser } from './store/actions';
import "./App.scss";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Write from "./views/Write";
import Search from "./views/Search";
import Settings from "./views/Settings";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

class App extends Component {

    authListener = () => {
        this.props.checkingUser();
        Firebase.firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                this.props.loggedIn(user)
            } else {
                this.props.loggedOut()
            }
        });
    }
    componentDidMount() {
        this.authListener();
    }
    render() {
        return (
            <div className="app-container">
                <Switch>
                    <PublicRoute path="/login" component={Login} />
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/write" component={Write} />
                    <PrivateRoute path="/search" component={Search} />
                    <PrivateRoute path="/settings" component={Settings} />
                    <PublicRoute exact path="/" component={Signup} />
                </Switch>
            </div>
        );
    }
}



export default connect(null, { loggedIn, loggedOut, checkingUser })(App);
