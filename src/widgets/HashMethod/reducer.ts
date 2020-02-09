import {getType} from 'typesafe-actions';
import produce, {Draft} from 'immer';

import {Hashes} from '#/utils/crypto';
import {storage} from '#/utils/localStorage';

import {chooseMethod, setDroppedOut} from './actions';
import {State} from './types';

const [obtainHashMethod, storeHashMethod] = storage('hashMethod');
const availableMethods = Object.keys(Hashes);
const fallbackHashMethod = availableMethods[1];

const initialState: State = {
  currentMethod: obtainHashMethod() || fallbackHashMethod,
  methods: availableMethods,
  isDroppedOut: false,
};

export default produce((draft: Draft<State>, action) => {
  switch (action.type) {
    case getType(chooseMethod): {
      const newCurrentMethod = action.payload;
      storeHashMethod(newCurrentMethod);
      draft.currentMethod = newCurrentMethod;
      break;
    }
    case getType(setDroppedOut): {
      const isDroppedOut = action.payload;
      draft.isDroppedOut = isDroppedOut;
    }
  }
}, initialState);
