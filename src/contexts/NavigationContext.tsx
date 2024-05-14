import { FC, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface NavigationContext {
  currentPage: string | null;
  previousPage: string | null;
}

export const NavigationContext = createContext<NavigationContext>({
  currentPage: '',
  previousPage: '',
});

interface NavigationProps {
  children: React.ReactNode;
}

export const NavigationProvider: FC<NavigationProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setPreviousPage(currentPage);
    setCurrentPage(pathname);
  }, [pathname]);
  return (
    <NavigationContext.Provider value={{ currentPage, previousPage }}>
      {children}
    </NavigationContext.Provider>
  );
};