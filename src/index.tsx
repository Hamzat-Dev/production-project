import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

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
