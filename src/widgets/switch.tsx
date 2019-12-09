import React from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

// TODO: написать расчет расстояния перемещения для слайдера

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
      transition-duration: 0.7s;
    }

    |pane[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
};

const switchStyle = {
  switch: css`
    |switch {
      margin-bottom: var(--indent4);
      font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas,
        'Courier New', monospace;
      font-weight: 500;
      background-color: var(--slider-default-color);
      border-radius: 5px;
      position:relative;
      display:block;
      user-select: none;
    }

    |option {
      cursor:pointer;
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
}

type OptionProps = ({
  label: string,
  id: string,
  onClick: (option: string) => void,
});

const Option: React.FC<OptionProps> = ({
  label,
  id,
  onClick,
}: OptionProps) => styled(
  switchStyle.switch
)``(
    <use.option
      id={id}
      onClick={() => { onClick(label); }}
    >
      {label}
    </use.option>
);

type SelectorProps = {
  label: string,
  left: number,
};

const Selector: React.FC<SelectorProps> = ({
  label,
  left,
}: SelectorProps) =>{
  console.log(left)
  return styled(switchStyle.switch
    )`
      |selector[a=MD5]{
        left: 0;
      }

      |selector[a=SHA3]{
        left: 53px;
      }
    `(
    <use.selector a={label}>
      {label}
    </use.selector>
  );
};

type SliderProps = {
  value: string,
  options: string[],
  onSlide: (option: string) => void,
};

export const Slider: React.FC<SliderProps> = ({
  options,
  value,
  onSlide,
}: SliderProps) => styled(
    switchStyle.switch
  )``(
    <use.switch>
      {options.map((option) =>
        <Option
          label={option}
          id={`id_${option}`}
          onClick={onSlide}
        />
      )}
      <Selector label={value} left={1}/>
    </use.switch>
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
