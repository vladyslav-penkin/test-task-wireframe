import { FC } from 'react';
import './styles.scss';
import { NavbarList } from '@components/Header/NavbarList';
import { useNavigation } from '@hooks/useNavigation';
import arrowRightIcon from '@assets/icons/arrowRightLight.svg';

export const Header: FC = () => {
  const { currentPage, previousPage } = useNavigation();
  return (
    <header className="Header">
      <div className="Header_container">
        <NavbarList />

        <div className="Header_popstate">
          <p className="Header_popstatePrev">{previousPage || 'None'}</p>
          <img src={arrowRightIcon} alt="arrow" />
          <p className="Header_popstateCurr">{currentPage || 'None'}</p>
        </div>
      </div>
    </header>
  );
};