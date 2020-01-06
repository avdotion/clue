import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css';

import {ClueApp} from './ClueApp';
import {store} from './store';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <ClueApp />
  </Provider>,
  rootElement
);

serviceWorker.register();
