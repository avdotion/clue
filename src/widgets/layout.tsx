import React from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

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

const defaultMargin = css`
  section {
    margin-bottom: var(--indent5);
  }
`;

export const Section = ({
  title,
  style = defaultMargin,
  children,
}: {
  title?: string,
  style?: any,
  children: React.ReactNode,
}) => styled(style)`
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`(
  <section>
    {
      title && <Label text={title} />
    }
    {children}
  </section>
);
