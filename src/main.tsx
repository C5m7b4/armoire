import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ToastProvider } from "./components/ToastProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider autoClose={true} duration={3000}>
        <App />
      </ToastProvider>
    </Provider>
  </StrictMode>
);
