import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";
import GlobalStyle from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
