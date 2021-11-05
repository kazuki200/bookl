import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import { UserBookContextProvider } from "./context/userBookContext";

ReactDOM.render(
  <React.StrictMode>
      <UserContextProvider>
        <UserBookContextProvider>
          <App />
        </UserBookContextProvider>
      </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
