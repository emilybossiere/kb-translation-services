import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header.js";
import Japanese from "./Apps.js";



const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" component={Japanese} exact={true} />
      <Route path="/english" component={English} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
