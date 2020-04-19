import React, {useRef} from 'react';
import styled, {use, css} from 'reshadow';

export const inputStyles = css`
  |label {
    maggin-left: 10px;
  }
`;

type InputProps = {
  value: string,
  addictionLine?: string,
  label: string,
  type: 'text' | 'password',
  autofocus: boolean,
  button: React.ReactNode,
  onChange: (value: string) => void,
};

export const Input: React.FC<InputProps> = (
  value,
  addictionLine,
  label,
  type,
  autofocus,
  button,
  onChange
): InputProps => {
  const inputRef = useRef<HTMLInputElement>(null);

  return styled(
    inputStyles
  )``(
    <>
      <use.label>
        <div>
          {label}
        </div>
      </use.label>
    </>
  );
};
