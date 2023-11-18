import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import SiteProvider from "./store/context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme";
import RTL from "./RTL";
import { HomePage } from "./pages/home-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RTL>
    <SiteProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </SiteProvider>
  </RTL>
);
