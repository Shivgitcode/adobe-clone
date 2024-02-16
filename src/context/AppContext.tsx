import { createContext, useState } from "react";
import { Option } from "../constants";
import { options } from "../constants";


interface AppContextProp {
  children: React.ReactNode;
}

type ValueProp = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isHidden: Option[]
  setIsHidden: React.Dispatch<React.SetStateAction<Option[]>>
};



export const AppContext = createContext<ValueProp | undefined>(undefined);

export function AppContextProvider({ children }: AppContextProp) {
  const [show, setShow] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<Option[]>(options)

  const value: ValueProp = {
    show,
    setShow,
    isHidden,
    setIsHidden

  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
