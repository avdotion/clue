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
  dropDownList: css`
    |option {
      width: 100px;
      display: flex;
      justify-content: center;
      padding-top: var(--indent1);
      padding-bottom: var(--indent1);
      line-height: 1.6em;
      border-radius: 5px;
      color: var(--input-neutral-text-color);
    }

    |option[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }

    |menu {
      position: absolute;
      border-radius: 0 0 5px 5px;
      background-color: var(--slider-default-color);
    }
  `,
};


type OptionProps = ({
  label: string,
  active: boolean,
  onClick: (value: string) => void,
})

const Option: React.FC<OptionProps> =({
  label,
  active,
  onClick,
}: OptionProps) => styled(
  checkBoxStyles.dropDownList
)``(
  <use.option
    active={active}
    onClick={onClick}
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

  return styled(
    checkBoxStyles.wrapper,
    checkBoxStyles.dropDownList
  )`
    |wrapper {
      width: 100px;
    }

    |wrapper[isDroppedOut] {
      border-radius: 5px 5px 0 0;
    }
  `(
    <use.wrapper isDroppedOut={isDroppedOut}>
      <Option
        label={value}
        active={true}
        onClick={() => setDroppedOut(!isDroppedOut)}
      />
      <use.menu>
        {isDroppedOut? options.map((option) => option !== value ?
          <Option
            label={option}
            active={false}
            onClick={() => {
                setDroppedOut(!isDroppedOut);
                onSelect(option);
              }
            }
          /> : ''
        ) : ''}
      </use.menu>
    </use.wrapper>
  );
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
