import React from 'react';
import styled, {use} from 'reshadow';

type MonkeyButtonProps = {
  hidden: boolean,
  onClick: (hidden: boolean) => void,
};

const MonkeyButton: React.FC<MonkeyButtonProps> = ({
  hidden,
  onClick,
}: MonkeyButtonProps) => styled`
  |wrapper {
    font-size: 22px;
    user-select: none;
  }

  |wrapper:hover {
    cursor: pointer;
  }
`(
  <use.wrapper
    onClick={() => {onClick(!hidden);}}
  >
    {hidden? '🙈' : '🐵'}
  </use.wrapper>
);

export default MonkeyButton;
