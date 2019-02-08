import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavContainer from "./Components/Nav";
import ROUTES, { RouteShape } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/styled-components";
import { defaultTheme } from "./styles/themes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <>
            <NavContainer />
            <>
              {Object.values(ROUTES).map(({ path, component, exact }: RouteShape) => (
                <Route key={path} exact={exact} path={path} component={component} />
              ))}
            </>
          </>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
