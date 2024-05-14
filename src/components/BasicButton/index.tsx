import { FC } from 'react';
import './styles.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  isDisabled?: boolean;
  onClick: (() => void) | undefined;
};

export const BasicButton: FC<Props> = ({
  title,
  isDisabled = false,
  onClick
}) => {
  return (
    <button 
      className={classNames('BasicButton', {
        'BasicButton-disabled': isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}