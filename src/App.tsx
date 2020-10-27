import React from "react";
import { ThemeProvider } from "styled-components";

import NotificationConnection from './components/common/NotificationConnection/NotificationConnection';
import { mainTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyles";
import Home from "./components/views/Home/Home";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <NotificationConnection />
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
