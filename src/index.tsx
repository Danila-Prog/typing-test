import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import {store} from "./redux/store/store";

import './index.scss'

import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
