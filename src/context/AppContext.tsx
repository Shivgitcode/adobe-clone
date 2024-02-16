import { createContext, useContext, useState } from "react";
import { Option } from "../constants";
import { options } from "../constants";


type ValueProp = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isHidden: Option[]
  setIsHidden: React.Dispatch<React.SetStateAction<Option[]>>
  handleOptions(id: string): void;
};



export const AppContext = createContext<ValueProp | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<Option[]>(options)

  const handleOptions = (id: string) => {
    console.log(id)
    setIsHidden(prev => {
      return (
        prev.map(el => {
          if (el.id === id) {
            return { ...el, hidden: !el.hidden }
          }
          else {
            return { ...el, hidden: true }
          }
        })
      )
    })

    console.log(isHidden)
  }


  const value: ValueProp = {
    show,
    setShow,
    isHidden,
    setIsHidden,
    handleOptions

  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Context not defined")
  }

  return context;
}