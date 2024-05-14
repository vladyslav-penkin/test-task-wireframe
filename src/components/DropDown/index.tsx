import { FC, useEffect, useRef, useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { DropDownButton } from './DropDownButton';
import { DropDownItem } from './DropDownItem';

interface Props {
  variables: string[];
  names: { [key: string]: string };
  searchParam: string;
  onChange: (value: string) => void;
  defaultValue: number;
}

export const DropDown: FC<Props> = ({
  variables,
  names,
  searchParam,
  onChange,
  defaultValue = 0,
}) => {
  const [stateDropDown, setStateDropDown] = useState<string>(
    searchParam || variables[defaultValue]
  );
  const [isOpen, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  
  const handleChange = (item: string) => {
    setOpen(false);
    setStateDropDown(item);
    onChange(item);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current
          && !dropDownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    setStateDropDown(searchParam);
  }, [searchParam]);

  return (
    <div
      className={classNames(
        'DropDown',
        { 'DropDown-opened': isOpen }
      )}
      ref={dropDownRef}
    >
      <DropDownButton
        onClick={() => setOpen(!isOpen)}
        stateDropDown={
          names[stateDropDown] || stateDropDown
        }
        isOpen={isOpen}
      />
      <ul
        className={classNames(
          'DropDown_content',
          { 'DropDown_content-active': isOpen },
        )}
      >
        {variables.map((item) => (
          <DropDownItem
            key={item}
            item={names[item] || item}
            onClick={() => handleChange(item)}
          />
        ))}
      </ul>
    </div>
  );
};