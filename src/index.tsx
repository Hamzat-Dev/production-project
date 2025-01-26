import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(<div>dsad</div>);
// }
// import React from "react";
// import ReactDOM from "react-dom/client";

// const rootElement = document.getElementById("root"); // Убедитесь, что ID совпадает

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<div>dsad</div>);
// } else {
//   console.error("Root element not found");
// }
