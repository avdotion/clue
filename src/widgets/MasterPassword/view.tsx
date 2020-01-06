import React, {useRef} from 'react';
import styled, {use} from 'reshadow';

import {InnerInput, defaultTextBoxStyle} from '#/components/Input';

import {MasterPassword} from './types';

type DataProps = {
  masterPassword: MasterPassword,
};

type DispatchProps = {
  setMasterPassword: (value: MasterPassword) => void,
};

export default function MasterPasswordComponent ({
  masterPassword,
  setMasterPassword,
}: DataProps & DispatchProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  return styled(
    defaultTextBoxStyle
  )(
    <use.wrapper onClick={() => {
        inputElement.current && inputElement.current.focus();
      }}>
      <InnerInput
        type='password'
        onChange={setMasterPassword}
        value={masterPassword}
        ref={inputElement}
        autoFocus={true}
      />
    </use.wrapper>
  );
};
