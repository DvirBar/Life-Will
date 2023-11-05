import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom";
import { RootCmp } from "./root-cmp";
import SiteProvider from "./store/context";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiteProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <RootCmp />
      </Router>
    </ThemeProvider>
  </SiteProvider>
);
