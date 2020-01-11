import {getType} from 'typesafe-actions';
import produce, {Draft} from 'immer';

import {boolStorage} from '#/utils/localStorage';

import {trigger} from './actions';
import {State} from './types';

const [obtainAutoCopy, storeAutoCopy] = boolStorage('autoCopy');

const initialState: State = {
  isEnabled: obtainAutoCopy(),
};

export default produce((draft: Draft<State>, action) => {
  switch (action.type) {
    case getType(trigger): {
      const isAutoCopyEnabled = action.payload;
      storeAutoCopy(isAutoCopyEnabled);
      draft.isEnabled = isAutoCopyEnabled;
    }
  }
}, initialState);
