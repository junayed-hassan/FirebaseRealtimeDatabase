import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "./app/store.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
