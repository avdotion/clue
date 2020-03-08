import React from 'react';
import styled, {use} from 'reshadow';

const colorPalette = {
  white: [255, 255, 255, 1],
};

type RootProps = {
  children: React.ReactNode,
};

export const Root = ({
  children,
}: RootProps) => styled`
  :global(body) {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colorPalette.white};
  }

  |root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`(
  <use.root>
    {children}
  </use.root>
);
