import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Calendar from "./components/commons/calendar";
import SubscribeForm from "./components/subscribeForm";
import LoginForm from "./components/loginForm";
import About from "./components/about";
import HomePage from "./components/homePage";
import NotFound from "./components/notFound";
import NavBar from "./components/commons/navBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer />
      <main className="container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/subscribe" component={SubscribeForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
