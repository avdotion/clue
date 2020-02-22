import * as AutoCopyActions from '#/widgets/AutoCopy/actions';
import * as DomainNameActions from '#/widgets/DomainName/actions';
import * as HashMethodActions from '#/widgets/HashMethod/actions';
import * as MasterPasswordActions from '#/widgets/MasterPassword/actions';
import * as OptionalSaltActions from '#/widgets/OptionalSalt/actions';

export default {
  masterPassword: MasterPasswordActions,
  domainName: DomainNameActions,
  optionalSalt: OptionalSaltActions,
  autoCopy: AutoCopyActions,
  hashMethod: HashMethodActions,
};
