import React, {useState} from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

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
  dropDownList: css`
    |option {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      float:left;
      transition: 300ms ease-out;
      padding: var(--indent1);
      line-height: 1.6em;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
    }

    |option[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
};


type OptionProps = ({
  label: string,
  onClick: (value: string) => void,
})

const Option: React.FC<OptionProps> =({
  label,
  onClick,
}: OptionProps) => styled(
  checkBoxStyles.dropDownList
)``(
  <use.option
    onClick={() => 0}
  >
    {label}
  </use.option>
);


type DropDownListProps = ({
  value: string,
  options: string[],
  onSelect: (option: string) => void,
});

export const DropDownList: React.FC<DropDownListProps> = ({
  value,
  options,
  onSelect,
}: DropDownListProps) => {
  const [isDroppedOut, setDroppedOut] = useState(false);

  console.log(isDroppedOut);

  if (isDroppedOut) {
    return (
      <div />
    );
  } else {
    return styled(
      checkBoxStyles.wrapper
    )`
      |wrapper {
        width: 100px;
      }
    `(
      <use.wrapper>
        <Option
          label={value}
          active={true}
          onClick={() => setDroppedOut(true)}
        />
      </use.wrapper>
    );
  }
};

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
