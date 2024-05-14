import { FC } from 'react';
import './styles.scss';

interface Props {
  item: string;
  onClick: () => void;
}

export const DropDownItem: FC<Props> = ({ item, onClick }) => {
  return (
    <li className="DropDownItem" onClick={onClick}>{item}</li>
  );
};