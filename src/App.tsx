import React from "react";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { ContextProvider } from "./utils/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StateMgmtPage } from "./pages/stateMgmt";
import { ContextPage } from "./pages/context";
import { UrlPage } from "./pages/url";
import { HomePage } from "./pages/home";
import { LinkStatePage } from "./pages/linkState";

function App() {
  return (
    <ContextProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/state-mgmt" element={<StateMgmtPage />} />
            <Route path="/context" element={<ContextPage />} />
            <Route path="/url" element={<UrlPage />} />
            <Route path="/link-state" element={<LinkStatePage />} />
          </Routes>
        </Router>
      </Provider>
    </ContextProvider>
  );
}

export default App;
