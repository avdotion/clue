import {createAction} from 'typesafe-actions';

import {DomainName} from './types';

export const setValue = createAction(
  '@DomainName/SET_VALUE',
  (newDomainName: DomainName) => newDomainName
)<DomainName>();
