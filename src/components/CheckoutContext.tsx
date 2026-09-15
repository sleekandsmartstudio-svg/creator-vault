"use client";

import { createContext, useContext, useState } from "react";

type CheckoutContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CheckoutContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

// Small hook so components can just call `open()` without knowing
// how the modal state is stored.
export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used inside <CheckoutProvider>");
  }
  return context;
}
