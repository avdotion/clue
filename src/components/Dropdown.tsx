import React, {useState} from 'react';
import styled, {use, css} from 'reshadow';

const checkBoxStyles = {
  wrapper: css`
    |wrapper {
      min-width: 80px;
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
  dropDownList: css`
    |option {
      width: 100%;
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
      min-width: 80px;
      position: absolute;
      border-radius: 0 0 5px 5px;
      background-color: var(--slider-default-color);
      transition: height 0.3s ease-in;
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
  options: readonly string[],
  currentOption: string,
  isDroppedOut: boolean,
  chooseOption: (option: string) => void,
  setDroppedOut: (isDroppedOut: boolean) => void,
});

const getMaxLength = (list: readonly string[]) => {
  let result = 0;
  for (let item of list) {
    result = result > item.length ? result : item.length;
  }
  return result;
};

export default function DropDownList ({
  options,
  currentOption,
  isDroppedOut,
  chooseOption,
  setDroppedOut,
}: DropDownListProps) {

  const maxLength = getMaxLength(options) * 9 + 'px';

  return styled(
    checkBoxStyles.wrapper,
    checkBoxStyles.dropDownList
  )`
    |wrapper {
      width: calc(${maxLength} + var(--indent4));
    }

    |wrapper[isDroppedOut] {
      border-radius: 5px 5px 0 0;
    }

    |menu {
      width: calc(${maxLength} + var(--indent4));
    }
  `(
    <use.wrapper isDroppedOut={isDroppedOut}>
      <Option
        label={currentOption}
        active={true}
        onClick={() => setDroppedOut(!isDroppedOut)}
      />
      <use.menu>
        {isDroppedOut && options.map((option) => option !== currentOption &&
          <Option
            label={option}
            active={false}
            onClick={() => {
                setDroppedOut(!isDroppedOut);
                chooseOption(option);
              }
            }
          />
        )}
      </use.menu>
    </use.wrapper>
  );
}
