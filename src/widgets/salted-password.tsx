import React from 'react';
// @ts-ignore
import styled, {use} from 'reshadow/macro';

import {SecretData} from  './../entities/secretData';
import {prepareHash} from './../utils/crypto';
import {Label} from './label';

type Props = {
  secretData: SecretData,
  hashMethodName: string,
  isAutoCopyEnabled: boolean,
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
}

export const SaltedPassword: React.FC<Props> = ({secretData, hashMethodName, isAutoCopyEnabled}: Props) => styled`
  |wrapper {
    height: 42px;
    width: 100%;
    background-color: var(--salted-password-color);
    color: var(--salted-password-text-color);
    font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    overflow: hidden;
    border-radius: 5px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`(
  <>
    <Label text={'Salted Password'} />
    <use.wrapper>
      <span>
        {
          saltThePassword(secretData, prepareHash(hashMethodName), isAutoCopyEnabled)
        }
      </span>
    </use.wrapper>
  </>
);
