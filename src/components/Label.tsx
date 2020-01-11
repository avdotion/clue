import React from 'react';
import styled, {use} from 'reshadow';

type Props = {
  text: string,
};

export const Label: React.FC<Props> = ({
  text,
}: {
  text: string,
}) => styled`
  |label {
    color: var(--label-text-color);
    margin-bottom: var(--indent3);
  }
`(
  <use.label>
    {text}
  </use.label>
);
