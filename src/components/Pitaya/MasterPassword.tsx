import React, {useState} from 'react';

import Input from './Input';
import MonkeyButton from './MonkeyButton';

type MasterPasswordProps = {
  value?: string,
  isTextHidden?: boolean,
  onChange: (value: string) => void,
}

const MasterPassword: React.FC<MasterPasswordProps> = ({
  value = '',
  onChange,
}: MasterPasswordProps) => {

  const[isTextHidden, changeTextHidden] = useState(true);

  return <Input
      value={value}
      label='Master Password'
      type={isTextHidden? 'password' : 'text'}
      onChange={onChange}
      button={
        <MonkeyButton
          hidden={isTextHidden}
          onClick={(hidden) => {changeTextHidden(hidden);}}
        />
      }
  />;
};


export default MasterPassword;
