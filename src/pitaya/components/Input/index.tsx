import React, {
  useState,
  useRef, 
  useCallback,
} from 'react';
import styled, {use, css} from 'reshadow';

import Text from '../Text';
import Grid, {Cell} from '../Grid';

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
  const memorizedOnClick = useCallback(
    () => {onClick(!hidden);},
    [hidden]
  );

  return styled`
  |wrapper {
    font-size: 22px;
    user-select: none;
  }

  |wrapper:hover {
    cursor: pointer;
  }
`(
    <use.wrapper
      onClick={memorizedOnClick}
    >
      {hidden? '🙈' : '🐵'}
    </use.wrapper>
  );
};

export const inputStyles = css`
  |wrapper {
    margin-top: 12px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: text;
    transition: all 0.3s ease-in-out;
  }

  |wrapper[focus='true'] {
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
    background-color: #000000;
    margin-right: -15px;
  }

  button:hover {
    cursor: pointer;
  }
`;

type InputProps = {
  /** Input value **/
  value?: string,
  /** Line before input value **/
  addiction?: string,
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
  addiction,
  label,
  type = 'text',
  autoFocus,
  onChange,
  buttonOnClick,
}: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const [isTextHidden, setIsTextHidden] = 
    useState<boolean>(type === 'password');

  const memorizedOnChange = (
    (event: React.FormEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    }
  );

  return styled(
    inputStyles
  )`
    |block {
      height: 16px;
      width: 100px;
      background-color: red;
    }
  `(
    <>
      <Grid>
        <Cell>
          <Text
            fontStyle="italic"
          >
            {label}
          </Text>
          <use.wrapper
            focus={focus.toString()}
            onClick={(event: React.SyntheticEvent) => {
              event.target === event.currentTarget &&
              inputElement.current && inputElement.current.focus();
            }
          }>
            <Text
              color={[0, 0, 0, 0.4]}
              >
              {addiction}
            </Text>
            <input
              value={value}
              type={isTextHidden ? 'password' : 'text'}
              ref={inputElement}
              autoFocus={autoFocus}
              spellCheck={false}
              onChange={memorizedOnChange}
              onFocus={() => {setFocus(true);}}
              onBlur={() => {setFocus(false);}}
              />
            {type === 'text' ?
              value === '' &&
              <button
              onClick={buttonOnClick}
              >
                <Text
                  color={[255, 255, 255, 1]}
                  >
                  PASTE
                </Text>
              </button> :
              <PasswordButton
              hidden={isTextHidden}
              onClick={(hidden) => {
                setIsTextHidden(hidden);
              }}
              />
            }
          </use.wrapper>
        </Cell>
      </Grid>
    </>
  );
};

export default Input;
