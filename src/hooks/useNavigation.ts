import { useContext } from 'react';
import { NavigationContext } from '@contexts/NavigationContext';

export const useNavigation = () => {
  const navigationContext = useContext(NavigationContext);
  return navigationContext;
};