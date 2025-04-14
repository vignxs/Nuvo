import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "./hooks/use-cart.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster />
      <App />
    </CartProvider>
  </StrictMode>
);
