"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type StateContextProps = {
  sideOpen: boolean;
  setSideOpen: Dispatch<SetStateAction<boolean>>;
  sideOpenMobile: boolean;
  setSideOpenMobile: Dispatch<SetStateAction<boolean>>;
  filterMenuOpen: boolean;
  setFilterMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultState = {
  sideOpen: true,
  sideOpenMobile: false,
  filterMenuOpen: false,
} as StateContextProps;

const StateContext = createContext(defaultState);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [sideOpen, setSideOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sideOpen");
      if (stored !== null) return stored === "true";
      return true;
    }
    return true;
  });

  const [sideOpenMobile, setSideOpenMobile] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sideOpenMobile");
      if (stored !== null) return stored === "true";
      return false;
    }
    return false;
  });

  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  // Persist sideOpen
  useEffect(() => {
    localStorage.setItem("sideOpen", String(sideOpen));
  }, [sideOpen]);

  // Persist sideOpenMobile
  useEffect(() => {
    localStorage.setItem("sideOpenMobile", String(sideOpenMobile));
  }, [sideOpenMobile]);

  return (
    <StateContext.Provider
      value={{
        sideOpen,
        setSideOpen,
        sideOpenMobile,
        setSideOpenMobile,
        filterMenuOpen,
        setFilterMenuOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
