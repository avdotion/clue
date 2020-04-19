import React, {useState, useEffect} from 'react';
import styled, {use, css} from 'reshadow';

import {Input} from '#/components/Pitaya/Input';

export const ClueApp: React.FC = () => {

   const [text, changeText] = useState('');

  return styled`
    |block {
      width: 250px;
    }
  `(
    <use.block>
      <Input
      value=''
      addictionLine=''
      label='Input'
      type='text'
      autofocus={true}
      button={<div></div>}
      onChange={(value) => {}}
      />
    </use.block>
  );
};
