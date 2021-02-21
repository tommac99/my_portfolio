import React, { useEffect, useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { Content } from "./components/content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "animate.css/animate.min.css";

import * as Scroll from "react-scroll";

const { scrollSpy } = Scroll;

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: red,
    type: "light",
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      scrollSpy.update();
    }, 0);
  }, []);

  if (loading) {
    // if your component doesn't have to wait for async data, remove this block
    return null; // render null when app is not ready
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
