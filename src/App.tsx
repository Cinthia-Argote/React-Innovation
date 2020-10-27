import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import { mainTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyles";
import Home from "./components/views/Home/Home";
import { setup } from "./services/client";

function App() {
  const client = setup();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
