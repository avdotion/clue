import React, {useState, useEffect} from 'react';
import styled, {use, css} from 'reshadow';

import Input from '#/components/Pitaya/Input';

export const ClueApp: React.FC = () => {

   const [text, changeText] = useState('');

  return styled`
    |block {
      width: 250px;
    }

    |button {
      width: 100px;
      height: 30px;
      background-color: red;
    }
  `(
    <use.block>
      <Input
        type={'password'}
        label={'Here will be label'}
        additionalLine={'smth'}
        inputValue={text}
        inputChangeAction={changeText}
      >
        <use.button>

        </use.button>
      </Input>
    </use.block>
  );
};
