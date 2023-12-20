import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
