import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ProductProvider } from "./store/products-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ProductProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </ProductProvider>
);
