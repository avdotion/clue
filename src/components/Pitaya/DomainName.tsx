import React from 'react';
import styled, {use} from 'reshadow';

import Input from './Input';
import Text from './Text';

type DomainNameProps = {
  value: string,
  onChange: (value: string) => void,
  buttonOnClick: () => void,
};

const DomainName: React.FC<DomainNameProps> = ({
  value,
  onChange,
  buttonOnClick,
}: DomainNameProps) => <Input
  value={value}
  label='URL'
  addictionLine='https://'
  rightPadding='5px'
  onChange={onChange}
  button={
    styled`
      |wrapper {
        padding: 9px 20px;
        border-radius: 6px;
        background-color: #000000;
        margin-left: 2px;
      }

      |wrapper:hover {
        cursor: pointer;
      }
    `(
      <use.wrapper
        onClick={() => {buttonOnClick();}}
      >
        <Text
          color={[255, 255, 255, 1]}
        >
          PASTE
        </Text>
      </use.wrapper>
    )
  }
/>;

export default DomainName;
