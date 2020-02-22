import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware, Epic} from 'redux-observable';
import {StateType, ActionType} from 'typesafe-actions';

import rootReducer from './rootReducer';
import rootAction from './rootAction';
import rootEpic from './rootEpic';

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof rootAction>;
export type RootEpic = Epic<RootAction, RootAction, RootState>;

export const epicMiddleware = createEpicMiddleware();

const middlewares = [
  epicMiddleware,
];

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
  (window as any) &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  enhancer
);

epicMiddleware.run(rootEpic);

export default store;
