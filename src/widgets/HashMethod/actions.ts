import {createAction} from 'typesafe-actions';

import {HashMethod} from '#/utils/crypto';

export const chooseMethod = createAction(
  '@HashMethod/CHOOSE_METHOD',
  (newHashMethod: HashMethod) => newHashMethod
)<HashMethod>();

export const setDroppedOut = createAction(
  '@HashMethod/SET_DROPPED_OUT',
  (isDroppedOut: boolean) => isDroppedOut
)<boolean>();
