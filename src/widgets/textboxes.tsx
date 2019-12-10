import React, {useRef} from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

import {SecretData} from  './../entities/secretData';
import {prepareHash} from './../utils/crypto';

type InputProps = {
  onChange: (value: string) => void,
  value: string,
};

const defaultTextBoxStyle = css`
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

const InnerInput = React.forwardRef<{
    type?: string,
    onChange?: (value: string) => void,
    value: string,
  }, HTMLInputElement>(({
  type = 'text',
  // @ts-ignore
  onChange,
  value,
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

  input[type='password'] {
    color: transparent;
    z-index: 1;
  }
`(
  <input
    type={type}
    onChange={onChange && (e => onChange(e.target.value))}
    // @ts-ignore
    ref={ref}
    value={value}
    spellCheck={false}
  />
));

export const Input: React.FC<InputProps> = ({
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )(
    <use.wrapper onClick={() => {
      inputElement.current && inputElement.current.focus();
    }}>
      {
        // @ts-ignore
        <InnerInput
          onChange={onChange}
          value={value}
          ref={inputElement}
        />
      }
    </use.wrapper>
  );
};

const getRandomText = (length: number) => {
  const literals = ['@', '%', '$', '#', '!', '&', '?'];
  let result = '';
  for (let i=0; i < length; i++) {
    result += literals[Math.floor(Math.random()*literals.length)];;
  }
  return result;
};

export const MasterPasswordInput: React.FC<InputProps> = ({
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )`
    |text_area{
      line-height: 1.6em;
      outline: none;
      background-color: none;
      border: 0;
      color: var(--input-default-text-color);
      align-items: center;
      height: 1.6em;
      position: absolute;
      user-select: none;
      pointer-events: none;
      z-index: 0;
    }
  `(
    <use.wrapper onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
      {
        // @ts-ignore
        <InnerInput
          type='password'
          onChange={onChange}
          value={value}
          ref={inputElement}
        />
      }
      <use.text_area>
        {getRandomText(value.length)}
      </use.text_area>
    </use.wrapper>
  );
};

export const DomainNameInput: React.FC<InputProps> = ({
  onChange,
  value,
}: InputProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )`
    span {
      line-height: 1.6em;
      color: var(--input-neutral-text-color);
    }
  `(
    <use.wrapper onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
        <span>https://</span>
        {
          // @ts-ignore
          <InnerInput
            onChange={onChange}
            value={value}
            ref={inputElement}
          />
        }
    </use.wrapper>
  );
};

const saltThePassword = (
  secretData: SecretData,
  hash: (arg0: string) => string,
  autoCopy: boolean
): string => {
  const {masterPassword, domainName, optionalSalt} = secretData;

  if (masterPassword.length === 0) {
    return '';
  }

  const hashedPassword = hash(masterPassword + domainName + optionalSalt);

  if (autoCopy) {
    navigator.clipboard.writeText(hashedPassword);
  }

  return hashedPassword;
};

type SaltedPasswordProps = {
  secretData: SecretData,
  hashMethodName: string,
  isAutoCopyEnabled: boolean,
};

export const SaltedPassword: React.FC<SaltedPasswordProps> = ({
  secretData,
  hashMethodName,
  isAutoCopyEnabled,
}: SaltedPasswordProps) => styled(
  defaultTextBoxStyle
)`
  |wrapper {
    background-color: var(--salted-password-color);
    color: var(--salted-password-text-color);
    justify-content: center;
  }
  span {
    min-height: 1.6em;
    line-height: 1.6em;
  }
`(
  <use.wrapper>
    <span>
      {
        saltThePassword(
          secretData,
          prepareHash(hashMethodName),
          isAutoCopyEnabled
        )
      }
    </span>
  </use.wrapper>
);
