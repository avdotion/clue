import React, {useState, useRef, useCallback} from 'react';
import styled, {use, css} from 'reshadow';

import Text from '../Text';
import Grid, {Column} from '../Grid';

type MonkeyButtonProps = {
  /** Is password hidden? **/
  hidden: boolean,
  /** Callback after button has been clicked **/
  onClick: (hidden: boolean) => void,
};

const MonkeyButton: React.FC<MonkeyButtonProps> = ({
  hidden,
  onClick,
}: MonkeyButtonProps) => {
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
  }

  input {
    outline: none;
    background: none;
    border: 0;
    width: 100%;
    min-width: 50%;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    box-shadow: none;
  }

  |button {
    padding: 9px 20px;
    border-radius: 6px;
    background-color: #000000;
    margin-left: 2px;
  }

  |button:hover {
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
  autoFocus = false,
  onChange,
  buttonOnClick,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const [isTextHidden, setIsTextHidden] = 
    useState<boolean>(type === 'password');

  return styled(
    inputStyles
  )`
    |block {
      height: 16px;
      width: 100px;
      background-color: red;
    }

    |wrapper {
      padding-right: ${type === 'text' ? '4px' : '20px'};
    }
  `(
    <>
      <Grid
        size={16}
      >
        <Column
          size={16}
        >
          <Text
            fontStyle='italic'
          >
            {label}
          </Text>
        </Column>
      </Grid>
      <use.wrapper onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
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
          onChange={event => {onChange(event.target.value);}}
        />
        {type === 'text' ?
          value === '' &&
          <use.button>
            <Text
              color={[255, 255, 255, 1]}
            >
              PASTE
            </Text>
          </use.button> :
          <MonkeyButton
            hidden={isTextHidden}
            onClick={(hidden) => {setIsTextHidden(hidden);}}
          />
        }
      </use.wrapper>
    </>
  );
};

export default Input;
