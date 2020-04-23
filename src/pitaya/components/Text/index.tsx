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

|text[use|theme='heading'] {
  font-size: 24px;
  font-weight: 500;
}

|text[use|theme='paragraph'] {
  font-size: 14px;
  font-weight: 400;
}

|text[ues|theme='caption'] {
  font-size: 14px;
  font-weight: 400;
}
`(
<use.text
  {...use({theme: theme})}
>
  {children}
</use.text>
);

export default Text;
