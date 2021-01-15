/* eslint-disable import/no-named-as-default */
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/PageNotFound";
import AboutUs from "../pages/AboutUs";
import React from "react";
import {hot} from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="py-5 lg:justify-end hidden lg:block">
          <Link activeClassName="active" exact to="/" className="px-5 py-2 mb-20">Home</Link>
          <Link activeClassName="active" to="/about" className="px-5 py-2">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutUs}/>

          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
