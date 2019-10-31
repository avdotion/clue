import {HSL} from './../utils/colorParser';

const COLOR_PALETTE = {
  'background-color': {
    dark: HSL(0, 0, 10),
    light: HSL(0, 0, 95),
  },
  'copyright-meta-text-color': {
    dark: HSL(0, 0, 38),
    light: HSL(0, 0, 60),
  },
  'mainframe-color': {
    dark: HSL(0, 0, 18),
    light: HSL(0, 0, 85),
  },
  'input-default-color': {
    dark: HSL(0, 0, 24),
    light: HSL(0, 0, 80),
  },
  'input-active-color': {
    dark: HSL(0, 0, 30),
    light: HSL(0, 0, 70),
  },
  'input-default-text-color': {
    dark: HSL(0, 0, 80),
    light: HSL(0, 0, 33),
  },
  'input-neutral-text-color': {
    dark: HSL(0, 0, 40),
    light: HSL(0, 0, 60),
  },
  'label-text-color': {
    dark: HSL(0, 0, 45),
    light: HSL(0, 0, 45),
  },
  'salted-password-color': {
    dark: HSL(0, 0, 15),
    light: HSL(0, 0, 90),
  },
  'salted-password-text-color': {
    dark: HSL(0, 0, 40),
    light: HSL(0, 0, 65),
  },
  'slider-default-color': {
    dark: HSL(0, 0, 24),
    light: HSL(0, 0, 78),
  },
  'slider-active-color': {
    dark: HSL(0, 0, 30),
    light: HSL(0, 0, 70),
  },
  'slider-default-text-color': {
    dark: HSL(0, 0, 45),
    light: HSL(0, 0, 60),
  },
  'slider-active-text-color': {
    dark: HSL(0, 0, 80),
    light: HSL(0, 0, 33),
  },
};

const rootElement = document.querySelector(':root');

export const activatePalette = (paletteId: string) => () => {
  Object.entries(COLOR_PALETTE).forEach(
    ([entity, paletteIds]) => {
      // TODO
      // @ts-ignore
      const color = paletteIds[paletteId];
      // @ts-ignore
      rootElement.style.setProperty(`--${entity}`, color);
    }
  );
}
