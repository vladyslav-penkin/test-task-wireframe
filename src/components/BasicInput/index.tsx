import { 
  FC, 
  useState,
  useCallback,
  useRef,
} from 'react';
import './styles.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};

export const BasicInput: FC<Props> = ({ title, query, placeholder, setQuery }) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
    setFocused(true);
  }, []);

  return (
    <section className="BasicInput">
      <p className="BasicInput_title">{title}</p>
      <div
        className={classNames(
          'BasicInput_container', {
            'BasicInput_container-focused': isFocused,
          }
        )}
        onClick={handleFocus}
      >
        <input 
          type="text" 
          value={query}
          className="BasicInput_input" 
          placeholder={placeholder}
          ref={inputRef}
          onChange={({ target: { value } }) => {
            setQuery(value);
          }}
          onBlur={() => setFocused(false)}
          onFocus={handleFocus}
        />
      </div>
    </section>
  );
};