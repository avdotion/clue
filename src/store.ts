import {createStore} from 'redux';
import {StateType} from 'typesafe-actions';

import rootReducer from '#/rootReducer';

export type RootState = StateType<ReturnType<typeof rootReducer>>;

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

