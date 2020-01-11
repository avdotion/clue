import React from 'react';
import styled, {use, css} from 'reshadow';

export const checkBoxStyles = {
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
    }

    |pane[active] {
      background-color: var(--slider-active-color);
      color: var(--slider-active-text-color);
    }
  `,
};

type TriggerProps = {
  disabled: boolean,
  disabledAlert: string,
  label: string,
  isActive: boolean,
  onTrigger: (value: boolean) => void,
};

export default function Trigger ({
  label,
  onTrigger,
  isActive,
  disabled,
  disabledAlert,
}: TriggerProps) {
  return styled(
    checkBoxStyles.wrapper,
    checkBoxStyles.clickablePannel
  )`
  |pane[disabled] {
    cursor: not-allowed;
  }
  `(
    <use.wrapper>
      <use.pane
        active={(isActive && !disabled) ? 'true' : undefined}
        disabled={disabled}
        onClick={() => { !disabled && onTrigger(!isActive); }}
        title={disabled ? disabledAlert : ''}
      >
        {isActive ? label + ' Enabled' : label + ' Disabled'}
      </use.pane>
    </use.wrapper>
  );
};
