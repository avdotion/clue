import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';

import {ClueApp} from './ClueApp';

const rootElement = document.getElementById('root');
render(
  <ClueApp />,
  rootElement
);
