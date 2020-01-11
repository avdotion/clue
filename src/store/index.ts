import {createStore} from 'redux';
import {StateType} from 'typesafe-actions';

import rootReducer from './rootReducer';

export type RootState = StateType<ReturnType<typeof rootReducer>>;

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
