import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "src/store";
import { ThemeProvider } from "src/styles/styled-components";
import { defaultTheme } from "src/styles/themes";
import ROUTES, { RouteShape } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import ErrorNotFound from "./Views/ErrorNotFound";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <>
            {/* <Nav /> */}
            <Switch>
              {...Object.values(ROUTES).map(({ path, component, exact }: RouteShape) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))}
              <Route component={ErrorNotFound} />
            </Switch>
          </>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
