import React from 'react';
import styled, {use} from 'reshadow';
import * as clipboard from 'clipboard-polyfill';

import {MasterPassword} from '#/widgets/MasterPassword/types';
import {DomainName} from '#/widgets/DomainName/types';
import {OptionalSalt} from '#/widgets/OptionalSalt/types';

import {defaultTextBoxStyle} from '#/components/Input';
import {prepareHash} from '#/utils/crypto';

type SaltedPasswordProps = {
  masterPassword: MasterPassword,
  domainName: DomainName,
  optionalSalt: OptionalSalt,

  hashMethod: string,
  isAutoCopyEnabled: boolean,
};

export default function SaltedPasswordComponent ({
  masterPassword,
  domainName,
  optionalSalt,
  hashMethod,
  isAutoCopyEnabled,
}: SaltedPasswordProps) {
  const saltThePassword = (
    hash: (arg0: string) => string,
    autoCopy: boolean
  ): string => {
    if (masterPassword.length === 0) {
      return '';
    }

    const hashedPassword = hash(masterPassword + domainName + optionalSalt);

    if (autoCopy) {
      navigator.clipboard.writeText(hashedPassword);
    }

    return hashedPassword;
  };

  const copyToClipBoard = () => {
    clipboard.writeText(
      saltThePassword(
        prepareHash(hashMethod),
        isAutoCopyEnabled
      )
    );
  };

  return styled(
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
    <use.wrapper
      title={'Tap to copy to the clipboard'}
      onClick={copyToClipBoard}
    >
      <span>
        {
          saltThePassword(
            prepareHash(hashMethod),
            isAutoCopyEnabled
          )
        }
      </span>
    </use.wrapper>
  );
}
