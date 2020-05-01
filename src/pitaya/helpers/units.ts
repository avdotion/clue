const DEFAULT_GAP = 12;

type Multiplier = 1 | 2 | 4 | 32;

export const space = (multiplier: Multiplier) =>
  `${multiplier * DEFAULT_GAP}px`;

type RGBAProps = [number, number, number, number];

type RGBA = {
  props: RGBAProps,
  type: 'RGBA',
};

type Palette = RGBA;

export const ink = ({props, type}: Palette) => {
  if (type === 'RGBA') {
    const [r, g, b, a] = props;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
};
