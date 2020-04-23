import React, {useCallback} from 'react';
import styled, {use} from 'reshadow';

type MonkeyButtonProps = {
  /** Is password hidden? **/
  hidden: boolean,
  /** Callback after button has been clicked **/
  onClick: (hidden: boolean) => void,
};

const MonkeyButton: React.FC<MonkeyButtonProps> = ({
  hidden,
  onClick,
}: MonkeyButtonProps) => {

  const memorizedOnClick = useCallback(
    () => {onClick(!hidden);},
    [hidden]
  );

  console.log(memorizedOnClick);

  return styled`
  |wrapper {
    font-size: 22px;
    user-select: none;
  }

  |wrapper:hover {
    cursor: pointer;
  }
`(
    <use.wrapper
      onClick={() => {memorizedOnClick();}}
    >
      {hidden? '🙈' : '🐵'}
    </use.wrapper>
  );
};

export default MonkeyButton;
