import React from 'react';
// @ts-ignore
import styled, {use} from 'reshadow/macro';

type Props = {
  text: string,
};

export const Label: React.FC<Props> = ({text}: Props) => styled`
  |label {
    color: var(--label-text-color);
    margin-bottom: var(--indent3);
  }
`(
  <use.label>
    {text}
  </use.label>
);
