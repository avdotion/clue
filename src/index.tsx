import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';

import {ClueApp} from './ClueApp';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
render(
  <ClueApp />,
  rootElement
);

serviceWorker.register();
