import React, {useRef} from 'react';
import styled, {use} from 'reshadow';

import {InnerInput, defaultTextBoxStyle} from '../../components/Input';
import {DomainName} from './types';

type DataProps = {
  domainName: DomainName,
};

type DispatchProps = {
  setDomainName: (value: DomainName) => void,
};

export default function DomainNameInput ({
  domainName,
  setDomainName,
}: DataProps & DispatchProps) {
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
        <InnerInput
          type='url'
          onChange={setDomainName}
          value={domainName}
          ref={inputElement}
        />
    </use.wrapper>
  );
};
