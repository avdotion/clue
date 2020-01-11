import {createAction} from 'typesafe-actions';

import {AutoCopy} from './types';

export const trigger = createAction(
  '@AutoCopy/TRIGGER',
  (isAutoCopyEnabled: AutoCopy) => isAutoCopyEnabled
)<AutoCopy>();
