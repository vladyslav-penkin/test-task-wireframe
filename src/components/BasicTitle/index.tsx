import { FC } from 'react';
import './styles.scss';

interface Props {
  title: string;
  size?: number;
  otherProps?: object;
}

export const BasicTitle: FC<Props> = ({ title, size, otherProps }) => {
  return (
    <h1 className="BasicTitle" style={{ fontSize: size }} {...otherProps}>
      {title}
    </h1>
  );
};