import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // <-- update import

import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
