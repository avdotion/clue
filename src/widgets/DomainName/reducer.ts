import {getType} from 'typesafe-actions';
import produce, {Draft} from 'immer';

import {setValue} from './actions';
import {State} from './types';

const initialState: State = {
  value: '',
};

export default produce((draft: Draft<State>, action) => {
  switch (action.type) {
    case getType(setValue): {
      const newDomainName = action.payload;
      draft.value = newDomainName;
    }
  }
}, initialState);
