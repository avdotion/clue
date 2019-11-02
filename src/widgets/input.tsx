import React, {useRef} from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

import {Label} from './label';

type InputProps = {
  label: string,
  onChange: (value: string) => void,
  value: string,
};

const defaultInputStyle = css`
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

  input {
    line-height: 1.6em;
    outline: none;
    background: none;
    border: 0;
    color: var(--input-default-text-color);
    align-items: center;
    width: 100%;
  }
`;

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef(null);

  return styled(
    defaultInputStyle
  )(
      <>
        <Label text={label} />
        <use.wrapper onClick={() => {
          // @ts-ignore
          inputElement.current.focus();
        }}>
          <input
            type='text'
            onChange={e => onChange(e.target.value)}
            value={value}
            ref={inputElement}
            spellCheck={false}
          />
        </use.wrapper>
      </>
    );
};


// const SYMBOLS = [':', ';', '!', '?', '¿', '–', '@', '*', '#', '¶', '§', `/`, `\\`, `⁄`, `ǀ`];
// const seed: number = Math.floor(Math.random() * SYMBOLS.length);

// const obfuscate = (value: string) => {
//   let mess = '';
//   for (let i = 0; i < value.length; ++i) {
//     mess += SYMBOLS[(seed + i) % SYMBOLS.length];
//   }
//   return mess;
// };

export const MasterPasswordInput: React.FC<InputProps> = ({
  label,
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef(null);

  return styled(
    defaultInputStyle
  )(
    <>
      <Label text={label} />
        <use.wrapper onClick={() => {
          // @ts-ignore
          inputElement.current.focus();
        }}>
        <input
          type='password'
          onChange={e => onChange(e.target.value)}
          value={value}
          ref={inputElement}
          autoFocus
        />
      </use.wrapper>
    </>
  );
};

const transformUrl = (url: string): string =>
  url.toLowerCase().replace(/http[s]?:\/\//g, '');

export const DomainNameInput: React.FC<InputProps> = ({
  label,
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef(null);

  return styled(
    defaultInputStyle
  )`
    span {
      line-height: 1.6em;
      color: var(--input-neutral-text-color);
    }
  `(
    <>
      <Label text={label} />
        <use.wrapper onClick={() => {
          // @ts-ignore
          inputElement.current.focus();
        }}>
          <span>https://</span>
          <input
          type='text'
          onChange={e => onChange(transformUrl(e.target.value))}
          value={value}
          spellCheck={false}
          ref={inputElement}
        />
      </use.wrapper>
    </>
  );
};
