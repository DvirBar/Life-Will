import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { RootCmp } from "./root-cmp";
import "./styles/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SiteProvider from "./store/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiteProvider>
    <Router>
      <RootCmp />
    </Router>
  </SiteProvider>
);
