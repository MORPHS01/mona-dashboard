"use client";
import {
  createContext,
  useContext,
  useState,
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
  selectedFilters: { [header: string]: string };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{ [header: string]: string }>
  >;
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
  const [sideOpen, setSideOpen] = useState(true);
  const [sideOpenMobile, setSideOpenMobile] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    [header: string]: string;
  }>({});

  return (
    <StateContext.Provider
      value={{
        sideOpen,
        setSideOpen,
        sideOpenMobile,
        setSideOpenMobile,
        filterMenuOpen,
        setFilterMenuOpen,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
