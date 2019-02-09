import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./Components/Nav";
import ROUTES, { RouteShape } from "./routes";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/styled-components";
import { defaultTheme } from "./styles/themes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <>
            {/* <Nav /> */}
            <Switch>
              {Object.values(ROUTES).map(({ path, component, exact }: RouteShape) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))}
            </Switch>
          </>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
