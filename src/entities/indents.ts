const INDENTS = [4, 8, 12, 16, 20, 24, 28];

const rootElement = document.querySelector(':root');
export const useIndents = () => {
  INDENTS.forEach((indent, i) => {
    // @ts-ignore
    rootElement.style.setProperty(`--indent${i+1}`, `${indent}px`);
  });
};

