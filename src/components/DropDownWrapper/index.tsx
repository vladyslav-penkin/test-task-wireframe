import { FC, memo } from 'react';
import './styles.scss';
import { DropDown } from '@components/DropDown';

type Props = {
  title: string;
  variables: string[];
  names: { [key: string]: string };
  searchParam: string;
  onChange: (value: string) => void;
  defaultValue: number;
}

export const DropDownWrapper: FC<Props> = memo(({ 
  title, 
  variables,
  names,
  searchParam, 
  onChange, 
  defaultValue,
}) => {
  return (
    <div className="DropDownWrapper">
      <p className="DropDownWrapper_title">{title}</p>
      <DropDown
        variables={variables}
        names={names}
        searchParam={searchParam}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
});