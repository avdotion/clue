import {getType} from 'typesafe-actions';
import produce from 'immer';

import {setValue} from './actions';
import {State} from './types';

const initialState: State = {
  value: '',
};

export default produce((draft, action) => {
  switch (action.type) {
    case getType(setValue): {
      const newMasterPassword = action.payload;
      draft.value = newMasterPassword;
    }
  }
}, initialState);
