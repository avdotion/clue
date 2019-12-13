import React from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';
import INDENTS from '../entities/indents';

const checkBoxStyles = {
  wrapper: css`
    |wrapper {
      text-transform: uppercase;
      font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas,
        'Courier New', monospace;
      font-weight: 500;
      border-radius: 5px;
      display: inline-block;
      cursor: pointer;
      background-color: var(--slider-default-color);
      user-select: none;
      margin-bottom: var(--indent4);
    }
  `,
  clickablePannel: css`
    |pane {
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
      transition: 300ms ease-out;
    }

    |pane[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
  slider: css`
    |option {
      position:relative;
      float:left;
      transition: 300ms ease-out;
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
    }

    |selector {
      position:absolute;
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      transition: 300ms ease-out;
      border-radius: 5px;
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
};

type OptionProps = ({
  label: string,
  onClick: (option: string) => void,
});

const Option: React.FC<OptionProps> = ({
  label,
  onClick,
}: OptionProps) => styled(
  checkBoxStyles.slider
)``(
    <use.option
      onClick={() => { onClick(label); }}
    >
      {label}
    </use.option>
);

type SelectorProps = {
  label: string,
  leftOffset: string,
};

const Selector: React.FC<SelectorProps> = ({
  label,
  leftOffset,
}: SelectorProps) =>styled(
  checkBoxStyles.slider
    )`
      |selector{
        left: ${leftOffset};
      }
    `(
    <use.selector>
      {label}
    </use.selector>
  );

type SliderProps = {
  value: string,
  options: string[],
  onSlide: (option: string) => void,
};

const calcWidth = (value: string, options: string[]) => {
  const LIGATUREWIDTH = 7;
  let result = 0;
  for (let item of options) {
    if (value === item) {
      return `${result}px`;
    } else {
      result += item.length * LIGATUREWIDTH + INDENTS[3] * 2;
    }
  }
};

export const Slider: React.FC<SliderProps> = ({
  options,
  value,
  onSlide,
}: SliderProps) => styled(
    checkBoxStyles.wrapper,
    checkBoxStyles.slider
  )`
    |wrapper{
      position:relative;
    }
  `(
    <use.wrapper>
      {options.map((option) =>
        <Option
          label={option}
          onClick={onSlide}
        />
      )}
      <Selector label={value} leftOffset={calcWidth(value, options) as string}/>
    </use.wrapper>
  );

type TriggerProps = {
  disabled: boolean,
  disabledAlert: string,
  label: string,
  active: boolean,
  onTrigger: (value: boolean) => void,
};

export const Trigger: React.FC<TriggerProps> = ({
  label,
  onTrigger,
  active,
  disabled,
  disabledAlert,
}: TriggerProps) => styled(
  checkBoxStyles.wrapper,
  checkBoxStyles.clickablePannel
)`
|pane[disabled] {
  cursor: not-allowed;
}
`(
  <use.wrapper>
    <use.pane
      active={active && !disabled}
      disabled={disabled}
      onClick={() => { !disabled && onTrigger(!active); }}
      title={disabled ? disabledAlert : ''}
    >
      {active ? label + ' Enabled' : label + ' Disabled'}
    </use.pane>
  </use.wrapper>
);
