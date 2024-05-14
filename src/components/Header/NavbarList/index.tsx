import { FC } from 'react';
import './styles.scss';
import { NavbarLink } from '@components/Header/NavbarList/NavbarLink';
import { NavList } from '@/types/NavList';

export const NavbarList: FC = () => {
  const navigationList = Object.entries(NavList);
  return (
    <nav className="Navbar">
      <ul className="Navbar_list">
        {navigationList.map(([title, to]) => (
          <li className="Navbar_item" key={title}>
            <NavbarLink title={title} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};