import {createAction} from 'typesafe-actions';

import {OptionalSalt} from './types';

export const setValue = createAction(
  '@OptionalSalt/SET_VALUE',
  (newOptionalSalt: OptionalSalt) => newOptionalSalt
)<OptionalSalt>();
