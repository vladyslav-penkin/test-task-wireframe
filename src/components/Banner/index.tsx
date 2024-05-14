import { FC } from 'react';
import './styles.scss';
import { BasicTitle } from '@components/BasicTitle';
import { BasicButton } from '../BasicButton';

interface Props {
  icon: string;
  title: string;
  buttonTitle?: string;
  onClick?: () => void;
}

export const Banner: FC<Props> = ({ icon, title, buttonTitle, onClick }) => {
  return (
    <section className="Banner">
      <BasicTitle title={title} size={30} />
      <img className="Banner_icon" src={icon} alt={title} />
      {buttonTitle && <BasicButton title={buttonTitle} onClick={onClick} />}
    </section>
  );
};