import React, {useState} from 'react';

import Input from './Input';
import MonkeyButton from './MonkeyButton';

type SaltProps = {
  /** Inner input value **/
  value?: string,
  /** Is password hidden **/
  isTextHidden?: boolean,
  /** Callback after input value has been changed **/
  onChange: (value: string) => void,
}

const Salt: React.FC<SaltProps> = ({
  value = '',
  onChange,
}: SaltProps) => {

  const[isTextHidden, changeTextHidden] = useState(true);

  return  <Input
      value={value}
      label='Salt'
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


export default Salt;
