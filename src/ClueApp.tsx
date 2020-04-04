import React, {useState, useEffect} from 'react';
import styled, {use, css} from 'reshadow';

import {Input} from '#/components/Input';

export const ClueApp: React.FC = () => {
  const [text, changeText] = useState('');

  return styled()`
    |block {
      width: 250px;
    }
  `(
    <use.block>
      <Input
        label={'Here will be label'}
        additionalLine={'smth'}
        inputValue={text}
        inputChangeAction={changeText}
      />
    </use.block>
  );
};

const useDayLightTheme = () => {
  const isNightTime = matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<'dark' | 'light'>(
    isNightTime ? 'dark' : 'light'
  );

  useEffect(() => {
    matchMedia('(prefers-color-scheme: dark)').addListener(
      e => e.matches && setTheme('dark')
    );

    matchMedia('(prefers-color-scheme: light)').addListener(
      e => e.matches && setTheme('light')
    );
  });

  return theme;
};
