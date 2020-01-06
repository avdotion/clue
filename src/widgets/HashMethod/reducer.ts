import {getType} from 'typesafe-actions';
import produce from 'immer';

import {Hashes} from '#/utils/crypto';
import {storage} from '#/utils/localStorage';

import {chooseMethod} from './actions';
import {State} from './types';

const [obtainHashMethod, storeHashMethod] = storage('hashMethod');
const availableMethods = Object.keys(Hashes);
const fallbackHashMethod = availableMethods[1];

const initialState: State = {
  chosenMethod: obtainHashMethod() || fallbackHashMethod,
  methods: availableMethods,
};

export default produce((draft, action) => {
  switch (action.type) {
    case getType(chooseMethod): {
      const newChosenMethod = action.payload;
      storeHashMethod(newChosenMethod);
      draft.chosenMethod = newChosenMethod;
    }
  }
}, initialState);
