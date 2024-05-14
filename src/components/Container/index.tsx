import { FC } from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  );
};