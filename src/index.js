import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom";
import { RootCmp } from "./root-cmp";
import SiteProvider from "./store/context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme";
import RTL from "./RTL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RTL>
    <SiteProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <RootCmp />
        </Router>
      </ThemeProvider>
    </SiteProvider>
  </RTL>

);
