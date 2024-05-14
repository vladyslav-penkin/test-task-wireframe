import { FC } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  to: string;
}

export const NavbarLink: FC<Props> = ({ title, to }) => {
  const location = useLocation();
  let href = location.pathname;

  if (href === '/create') href = '/';

  return (
    <NavLink to={to} className={({ isActive }) => classNames(
      'NavbarLink',
      { 'NavbarLink-active': isActive }
    )}>
      {title}
      {to === href && (
        <motion.div className="NavbarLink_underline" layoutId="underline" />
      )}
    </NavLink>
  );
};