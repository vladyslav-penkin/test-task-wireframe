import { FC } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import arrowLeftIcon from '@assets/icons/arrowLeftLight.svg';

type Props = {
  to: string;
};

export const BackToButton: FC<Props> = ({ to }) => {
  return (
    <section className="BackToButton">
      <NavLink
        to={to}
        className="BackToButton_button"
      >
        <img
          src={arrowLeftIcon}
          alt="back"
          className="BackToButton_image"
        />
        Back
      </NavLink>
    </section>
  );
};