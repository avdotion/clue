import React from 'react';
import styled, {use} from 'reshadow';

import {checkBoxStyles} from '#/components/Trigger';

type OptionProps = ({
  active: boolean,
  label: string,
  onClick: (option: string) => void,
});

const Option: React.FC<OptionProps> = ({
  active = false,
  label,
  onClick,
}: OptionProps) => styled(
  checkBoxStyles.clickablePannel
)`
  |pane[active] {
    cursor: default;
  }
`(
  <use.pane
    active={active ? 'true' : undefined}
    onClick={() => { onClick(label); }}
  >
    {label}
  </use.pane>
);

type SliderProps = {
  options: readonly string[],
  currentOption: string,
  chooseOption: (option: string) => void,
};

export default function Slider ({
  options,
  currentOption,
  chooseOption,
}: SliderProps) {
  return styled(
    checkBoxStyles.wrapper
  )(
    <use.wrapper>
      { options.map((option, index) => (
          <Option
            key={index}
            active={option === currentOption}
            label={option}
            onClick={chooseOption}
          />
        ))
      }
    </use.wrapper>
  );
};
