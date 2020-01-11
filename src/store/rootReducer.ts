import {combineReducers} from 'redux';

import MasterPasswordReducer from '#/widgets/MasterPassword/reducer';
import DomainNameReducer from '#/widgets/DomainName/reducer';
import OptionalSaltReducer from '#/widgets/OptionalSalt/reducer';
import HashMethodReducer from '#/widgets/HashMethod/reducer';
import AutoCopyReducer from '#/widgets/AutoCopy/reducer';

export default combineReducers({
  masterPassword: MasterPasswordReducer,
  domainName: DomainNameReducer,
  optionalSalt: OptionalSaltReducer,
  hashMethod: HashMethodReducer,
  autoCopy: AutoCopyReducer,
});
