import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "./Translation/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages/Admin/assets/scss/style.scss";
import { Provider } from "react-redux";
import store from "./Features/store";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
