import { FC, memo } from 'react';
import './styles.scss';
import classNames from 'classnames';
import dropDownArrow from '@assets/icons/dropDown-arrow.svg';

type Props = {
  onClick: () => void;
  stateDropDown: string;
  isOpen: boolean;
};

export const DropDownButton: FC<Props> = memo(({
  onClick,
  stateDropDown,
  isOpen,
}) => {
  return (
    <div
      className="DropDownButton"
      onClick={onClick}
    >
    <p className="DropDownButton_title">{stateDropDown}</p>
    <img
      className={classNames(
        'DropDownButton_arrow', {
          'DropDownButton_arrow-focused': isOpen,
        }
      )}
      src={dropDownArrow}
      alt="DropDownArrow"
    />
    </div>
  );
});