import React, {useRef} from 'react';
import styled, {use, css} from 'reshadow';

export const defaultTextBoxStyle = css`
  |wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
  }

  |label {
    margin-left: 20px;
    margin-bottom: 10px;
    font-style: italic;
  }

  |inputField {
    padding: 7px 15px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    display: flex;
    overflow: hidden;
    font-weight: 500;
    align-items: center;
    flex-wrap: reverse;
  }

  |additionalLine {
    line-height: 1.6em;
    outline: none;
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    color: rgb(143, 143, 143);
  }

`;

type InnerInputProps = {
  /** Type of input **/
  type?: string,
  /** Callback after change **/
  onChange: (value: string) => void,
  /** Text in input **/
  value: string,
  /** Does use auto focus on input after click on border**/
  autoFocus?: boolean,
};

export const InnerInput = React.forwardRef<HTMLInputElement, InnerInputProps>(({
  type = 'text',
  onChange,
  value,
  autoFocus,
}, ref) => styled`
  input {
    line-height: 1.6em;
    outline: none;
    background: none;
    border: 0;
    display: flex;
    width: 1px;
    flex-grow: 2;
  }
  input:required {
    box-shadow: none;
  }
  input:invalid {
      box-shadow: none;
  }
`(
  <input
    type={type}
    onChange={onChange && (e => onChange(e.target.value))}
    ref={ref}
    value={value}
    spellCheck={false}
    autoFocus={autoFocus}
  />
));

type InputProps = {
  /** Custom Button **/
  children?: React.ReactNode,
  /** Name of input  **/
  label: string,
  /** Type of input **/
  type?: string,
  /** Line before input**/
  additionalLine?: string,
  /** Callback after change **/
  inputChangeAction: (value: string) => void,
  /** Text in input **/
  inputValue: string,
};

const Input: React.FC<InputProps> = ({
  children,
  label,
  type='text',
  additionalLine,
  inputChangeAction,
  inputValue,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )(
    <use.wrapper>
      <use.label>
        {label}
      </use.label>
      <use.inputField onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
        <use.additionalLine>
          {additionalLine}
        </use.additionalLine>
        <InnerInput
          type={type}
          onChange={inputChangeAction}
          value={inputValue}
          ref={inputElement}
        />
        {children}
      </use.inputField>
    </use.wrapper>
  );
};

export default Input;
