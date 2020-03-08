import React from 'react';
import styled, {use} from 'reshadow';

type Color = [number, number, number, number];
const DEFAULT_COLOR: Color = [0, 0, 0, 1];

type Theme = 'heading' | 'paragraph' | 'caption';

const themeDomMap = {
  heading: 'h1',
  paragraph: 'p',
  caption: 'span',
};

const mapThemeToDom = (theme: Theme) => themeDomMap[theme];
const transformColorToRGBA = (color: Color) =>
  `rgba(${color.join(',')})`;

type TypoProps = {
  children: React.ReactNode,
  theme: Theme,
  fontStyle: 'normal' | 'italic',
  color: Color,
};

export const Typo = ({
  children,
  theme = 'paragraph',
  fontStyle = 'normal',
  color = DEFAULT_COLOR,
}: TypoProps) => styled`
  |typo {
    font-family: 'Roboto Mono', monospace;
    font-style: ${fontStyle};
    color: ${transformColorToRGBA(color)}
  }

  |typo[theme] {
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
  <use.typo
    as={mapThemeToDom(theme)}
    {...use({theme})}
  >
    {children}
  </use.typo>
);

export default Typo;
