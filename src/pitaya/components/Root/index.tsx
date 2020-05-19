import React from 'react';
import styled, {use} from 'reshadow';
import {ink} from '#/pitaya/helpers/units';

type RootProps = {
  /** Root content */
  children: React.ReactNode,
};

const Root = ({
  children,
}: RootProps) => styled`
  :global(body) {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  |root {
    background-color: ${ink({type: 'RGBA', props: [255, 255, 255, 1]})};
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`(
  <use.root as="main">
    {children}
  </use.root>
);

export default Root;
