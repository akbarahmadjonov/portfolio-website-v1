import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import "@app/styles/components/style.scss";
import "@app/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
