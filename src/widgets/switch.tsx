import React from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

const checkBoxStyles = {
  wrapper: css`
    |wrapper {
      text-transform: uppercase;
      font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
      font-weight: 500;
      border-radius: 5px;
      display: inline-block;
      cursor: pointer;
      background-color: var(--slider-default-color);
      user-select: none;
    }
  `,
  clickablePannel: css`
    |pane {
      padding: var(--indent1) var(--indent4);
      line-height: 1.6em;
      display: inline-block;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
    }

    |pane[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
};

type OptionProps = ({
  active: boolean,
  label: string,
  onClick: (option: string) => void,
});

const Option: React.FC<OptionProps> = ({active = false, label, onClick}: OptionProps) => styled(
  checkBoxStyles.clickablePannel,
)`
  |pane[active] {
    cursor: default;
  }
`(
  <use.pane
    active={active}
    onClick={() => {onClick(label)}}
  >
    {label}
  </use.pane>
);

type SliderProps = {
  value: string,
  options: string[],
  onSlide: (option: string) => void,
};

export const Slider: React.FC<SliderProps> = ({options, value, onSlide}: SliderProps) => {
  return styled(
    checkBoxStyles.wrapper
  )``(
    <use.wrapper>
      {
        options.map((option, index) => (
          <Option
            key={index}
            active={option === value}
            label={option}
            onClick={onSlide}
          />
        ))
      }
    </use.wrapper>
  );
};

type TriggerProps = {
  disabled: boolean,
  disabledAlert: string,
  label: string,
  active: boolean,
  onTrigger: () => void,
};

export const Trigger: React.FC<TriggerProps> = ({
  label,
  onTrigger,
  active,
  disabled,
  disabledAlert,
}: TriggerProps) => styled(
  checkBoxStyles.wrapper,
  checkBoxStyles.clickablePannel,
)`
|pane[disabled] {
  cursor: not-allowed;
}
`(
  <use.wrapper>
    <use.pane
      active={active && !disabled}
      disabled={disabled}
      onClick={() => { !disabled && onTrigger(); }}
      title={disabled ? disabledAlert : ''}
    >
      {active ? label + ' Enabled' : label + ' Disabled'}
    </use.pane>
  </use.wrapper>
);
