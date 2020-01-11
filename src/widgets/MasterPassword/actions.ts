import {createAction} from 'typesafe-actions';

import {MasterPassword} from './types';

export const setValue = createAction(
  '@MasterPassword/SET_VALUE',
  (newMasterPassword: MasterPassword) => newMasterPassword
)<MasterPassword>();
