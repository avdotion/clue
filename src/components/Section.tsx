import React from 'react';
import styled, {css} from 'reshadow';
import {Label} from '#/components/Label';

type Props = {
  title?: string,
  style?: any,
  children: React.ReactNode,
};

const defaultMargin = css`
  section {
    margin-bottom: var(--indent5);
  }
`;

export const Section: React.FC<Props> = ({
  title,
  style = defaultMargin,
  children,
}: Props) => styled(style)`
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

export default Section;
