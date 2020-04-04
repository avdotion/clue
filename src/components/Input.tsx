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

  |additionalLine {
    line-height: 1.6em;
    outline: none;
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    font-color: rgb(143, 143, 143);
  }

  |inputField {
    padding: 7px 15px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    display: flex;
    overflow: hidden;
    font-weight: 500;
  }
`;

type InnerInputProps = {
  type?: string,
  onChange: (value: string) => void,
  value: string,
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
    width: 100%;
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
  label: string,
  additionalLine?: string,
  inputChangeAction: (value: string) => void,
  inputValue: string,
};

export const Input: React.FC<InputProps> = ({
  label,
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
          onChange={inputChangeAction}
          value={inputValue}
          ref={inputElement}
        />
      </use.inputField>
    </use.wrapper>
  );
};
