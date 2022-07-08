import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

import { BrowserRouter } from "react-router-dom";

const loader = document.querySelector(".loader-container");
const loader1 = document.querySelector(".loader1");
const showLoader = () => {
  loader.classList.remove("loader--hide");
  loader1.classList.remove("loader--hide");
};

const hideLoader = () => {
  loader.classList.add("loader--hide");
  loader1.classList.add("loader--hide");
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
