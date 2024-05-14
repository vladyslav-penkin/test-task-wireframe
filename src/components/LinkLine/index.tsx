import { FC, memo } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { LinkLineType } from '@/types/LinkLineType';
import homeIcon from '@assets/icons/homeLight.svg';
import arrowRightIcon from '@assets/icons/arrowRightLight.svg';

type Props = {
  titles: LinkLineType[];
};

export const LinkLine: FC<Props> = memo(({ titles }) => {
  const capitalize = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <section className="LinkLine">
      <NavLink to="/" className="LinkLine_link">
        <img
          src={homeIcon}
          alt="home"
          className="LinkLine_arrow"
        />
      </NavLink>

      {titles.map(({ title, link }) => (
        <>
          <img
            src={arrowRightIcon}
            alt=""
            className="LinkLine_arrow"
          />
          <NavLink
            to={link}
            className={({ isActive }) => classNames(
              'LinkLine_link',
              { 'LinkLine_link-active': isActive }
            )}
            end
          >
            <p className="LinkLine_title">{capitalize(title || '')}</p>
          </NavLink>
        </>
      ))}
    </section>
  );
});