import React, {useRef} from 'react';
import styled, {use, css} from 'reshadow';

export const defaultTextBoxStyle = css`
  |wrapper {
    padding: var(--indent2) var(--indent5);
    border-radius: 5px;
    background-color: var(--input-default-color);
    width: 100%;
    display: flex;
    overflow: hidden;
    font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
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
    color: var(--input-default-text-color);
    align-items: center;
    width: 100%;
  }

  input:required {
    box-shadow: none;
  }

  input:invalid {
    box-shadow: none;
  }

  input:hover {
    cursor: pointer;
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
  inputChangeAction: (value: string) => void,
  inputValue: string,
};

export const Input: React.FC<InputProps> = ({
  inputChangeAction,
  inputValue,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )(
    <use.wrapper onClick={() => {
      inputElement.current && inputElement.current.focus();
    }}>
      <InnerInput
        onChange={inputChangeAction}
        value={inputValue}
        ref={inputElement}
      />
    </use.wrapper>
  );
};
