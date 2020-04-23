import React, {useRef} from 'react';
import styled, {use, css} from 'reshadow';

import Text from './Text';
import Grid, {Column} from './Grid';

export const inputStyles = css`
  |label {
    margin-left: 10px;
  }

  |wrapper {
    margin-top: 12px;
    height: 42px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0 20px 0;
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
  }

  input:required {
    box-shadow: none;
  }

  input:invalid {
      box-shadow: none;
  }
`;

type InputProps = {
  /** Input value **/
  value?: string,
  /** Line before input value **/
  addictionLine?: string,
  /** label over input **/
  label: string,
  /** Input type **/
  type?: 'text' | 'password',
  /** Is autofocus enable? **/
  autoFocus?: boolean,
  /** Rigth padding in wrapper for custom button **/
  rightPadding?: string,
  /** Custom button **/
  button?: React.ReactNode,
  /** Callback after value change **/
  onChange: (value: string) => void,
};

export const Input: React.FC<InputProps> = ({
  value = '',
  addictionLine,
  label,
  type = 'text',
  autoFocus = false,
  rightPadding = '20px',
  button,
  onChange,
}: InputProps) => {

  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    inputStyles
  )`
    |block {
      height: 16px;
      width: 100px;
      background-color: red;
    }

    |wrapper {
      padding-right: ${rightPadding};
    }
  `(
    <>
      <use.label>
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
      </use.label>
      <use.wrapper onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
        <Text
          color={[0, 0, 0, 0.4]}
        >
          {addictionLine}
        </Text>
        <input
          value={value}
          type={type}
          ref={inputElement}
          autoFocus={autoFocus}
          spellCheck={false}
          onChange={event => {onChange(event.target.value);}}
        />
        {button}
      </use.wrapper>
    </>
  );
};

export default Input;
