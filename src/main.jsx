import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // 🔹 StrictMode helps detect potential problems in development
  <StrictMode>
    {/* 🔹 Provide Redux store to the entire app */}
    <Provider store={store}>
      <App /> {/* Main App component */}
    </Provider>
  </StrictMode>,
);
