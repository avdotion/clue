import React from 'react';
import styled, {use} from 'reshadow';

type Color = [number, number, number, number];
const DEFAULT_COLOR: Color = [0, 0, 0, 1];

type Theme = 'heading' | 'paragraph' | 'caption';

const transformColorToRGBA = (color: Color) =>
  `rgba(${color.join(',')})`;

type TextProps = {
  /** Inner text */
  children: React.ReactNode,
  /** Common preferences */
  theme?: Theme,
  /** Font style */
  fontStyle?: 'normal' | 'italic',
  /** Font color */
  color?: Color,
};

export const Text = ({
  children,
  theme = 'paragraph',
  fontStyle = 'normal',
  color = DEFAULT_COLOR,
}: TextProps) => styled`
  |text {
    font-family: 'Roboto Mono', monospace;
    font-style: ${fontStyle};
    color: ${transformColorToRGBA(color)}
  }

  |text[use|theme] {
    &='heading' {
      font-size: 24px;
      font-weight: 500;
    }

    &='paragraph', &='caption' {
      font-size: 14px;
      font-weight: 400;
    }
  }
`(
  <React.Fragment>
    {theme === 'heading' &&
      <use.text
        as="h1"
        {...use({theme: theme})}
      >
        {children}
      </use.text>
    }
    {theme === 'paragraph' &&
      <use.text
        as="p"
        {...use({theme: theme})}
      >
        {children}
      </use.text>
    }
    {theme === 'caption' &&
      <use.text
        as="span"
        {...use({theme: theme})}
      >
        {children}
      </use.text>
    }
  </React.Fragment>
);

export default Text;
