import { createContext } from "react";

import { AppStore } from "./AppStore";

export const stores = {
  deckStore: new AppStore(),
};

export const storesContext = createContext(stores);
export const StoresProvider = storesContext.Provider;
