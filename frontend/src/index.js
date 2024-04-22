import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwindcss.css";
import Layout from "./layout";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { IconContext } from "react-icons";
import App from "./App";
import "./index.css";
import { SocketProvider } from './SocketContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <IconContext.Provider
        value={{ color: "#778fcc", className: "global-class-name" }}
      >
          <SocketProvider>
              <Layout>
                  <App />
              </Layout>
          </SocketProvider>
      </IconContext.Provider>
    </Provider>
  </BrowserRouter>
);
