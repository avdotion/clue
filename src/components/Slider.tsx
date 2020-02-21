import React, {useRef, useState, useEffect} from 'react';
import styled, {use, css} from 'reshadow';

import {checkBoxStyles} from '#/components/Trigger';

const slider = css`
  |option {
      position: relative;
      float:left;
      transition: 300ms ease-out;
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
    }
    |selector {
      position: absolute;
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      transition: 300ms ease-out;
      border-radius: 5px;
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
`;

type OptionProps = ({
  label: string,
  onClick: (option: string) => void,
});

const Option = React.forwardRef(({
  label,
  onClick,
}: OptionProps,
ref: any) => styled(
  slider
)``(
  <use.option
    onClick={() => onClick(label)}
    ref={ref}
  >
    {label}
  </use.option>
));

type SelectorProps = {
  label: string,
  offsetLeft: string,
};

const Selector: React.FC<SelectorProps> = ({
  label,
  offsetLeft,
}: SelectorProps) =>styled(
  slider
    )`
      |selector{
        left: ${offsetLeft};
      }
    `(
    <use.selector>
      {label}
    </use.selector>
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

  const [currentOffsetLeft, setOffsetLeft] = useState(0);

  let optionsRefs = new Map();
  for (let option of options) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    optionsRefs.set(option, useRef(null));
  }

  useEffect(() => {
    let offsetLeft = 0;
    // @ts-ignore
    for (let [option, ref] of optionsRefs.entries()) {
      if (option !== currentOption) {
        offsetLeft += ref.current.offsetWidth;
      } else {
        break;
      }
    }
    setOffsetLeft(offsetLeft);
  }, [currentOption, optionsRefs]);

  return styled(
    checkBoxStyles.wrapper
  )`
    |wrapper{
      position:relative;
    }
  `(
    <use.wrapper>
      {options.map((option, index) => (
          <Option
            key={index}
            label={option}
            onClick={chooseOption}
            ref={optionsRefs.get(option)}
          />
        ))
      }
      <Selector label={currentOption} offsetLeft={currentOffsetLeft + 'px'}/>
    </use.wrapper>
  );
};
