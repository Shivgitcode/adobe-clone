import { createContext, useState } from "react";

interface AppContextProp {
  children: React.ReactNode;
}

type ValueProp = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<ValueProp | null>(null);

export function AppContextProvider({ children }: AppContextProp) {
  const [show, setShow] = useState<boolean>(true);

  const value: ValueProp = {
    show,
    setShow,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
