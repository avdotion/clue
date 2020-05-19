import React, {
  useState,
  useRef, 
  useCallback,
} from 'react';
import styled, {use} from 'reshadow';

import Text from '../Text';

type PasswordButtonProps = {
  /** Is password hidden? **/
  hidden: boolean,
  /** Callback after button has been clicked **/
  onClick: (hidden: boolean) => void,
};

const PasswordButton: React.FC<PasswordButtonProps> = ({
  hidden,
  onClick,
}: PasswordButtonProps) => {
  const triggerVisibilityHandler = useCallback(
    () => {onClick(!hidden);},
    [hidden, onClick]
  );

  return styled`
    button {
      font-size: 22px;
      user-select: none;
      background-color: rgba(255, 255, 255, 1);
      cursor: pointer;
      padding-top: 4px;
    }
  `(
      <button onClick={triggerVisibilityHandler}>
        {hidden? '🙈' : '🐵'}
      </button>
    );
};

type InputProps = {
  /** Input value **/
  value?: string,
  /** Line before input value **/
  prefix?: string,
  /** label over input **/
  label: string,
  /** Input type **/
  type?: 'text' | 'password',
  /** Is autofocus enable? **/
  autoFocus?: boolean,
  /** Callback after value change **/
  onChange: (value: string) => void,
  /**  Callback after button have been clicked **/
  buttonOnClick?: () => void,
};

export const Input: React.FC<InputProps> = ({
  value = '',
  prefix,
  label,
  type = 'text',
  autoFocus,
  onChange,
  buttonOnClick,
}: InputProps) => {
  const [shadow, setShadow] = useState<boolean>(false);

  const [isTextHidden, setIsTextHidden] = 
    useState<boolean>(type === 'password');

  const inputElement = useRef<HTMLInputElement>(null);

  const onChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    }, 
    [onChange]
  );

  const setShadowHandler = useCallback(
    () => {setShadow(!shadow);},
    [shadow]
  );

  const setIsTextHiddenHandler = useCallback(
    () => {setIsTextHidden(!isTextHidden);},
    [isTextHidden]
  );

  const setFocusHandler = useCallback(
    (event: React.SyntheticEvent) => {
      event.target === event.currentTarget &&
      inputElement.current && inputElement.current.focus();
    },
    []
  );

  return styled`
    |wrapper {
      margin-top: 12px;
      height: 40px;
      border: 1px solid rgba(0, 0, 0, 1);
      border-radius: 8px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      cursor: text;
      transition: all 0.3s ease-in-out;
    }

    |wrapper[shadow='true'] {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    input {
      outline: none;
      background: none;
      border: 0;
      width: 100%;
      min-width: 50%;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      box-shadow: none;
    }

    button {
      padding: 8px 20px;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 1);
      margin-right: -15px;
    }

    button:hover {
      cursor: pointer;
    }
  `(
    <>
      <Text fontStyle="italic">
        {label}
      </Text>
      <use.wrapper
        shadow={shadow.toString()}
        onClick={setFocusHandler}
      >
        <Text color={[0, 0, 0, 0.4]}>
          {prefix}
        </Text>
        <input
          value={value}
          type={isTextHidden ? 'password' : 'text'}
          ref={inputElement}
          autoFocus={autoFocus}
          spellCheck={false}
          onChange={onChangeHandler}
          onFocus={setShadowHandler}
          onBlur={setShadowHandler}
          />
        {type === 'text' ?
          value === '' &&
          <button onClick={() => buttonOnClick}>
            <Text color={[255, 255, 255, 1]}>
              PASTE
            </Text>
          </button> :
          <PasswordButton
            hidden={isTextHidden}
            onClick={setIsTextHiddenHandler}
          />
        }
      </use.wrapper> 
    </>
  );
};

export default Input;
