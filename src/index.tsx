import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'reset-css';
import '#/pitaya/styles/reset.css';

import Root from '#/pitaya/widgets/Root';
import store from '#/store';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
);

serviceWorker.register();
