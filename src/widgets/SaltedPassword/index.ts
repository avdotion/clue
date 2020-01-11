import {connect} from 'react-redux';

import {RootState} from '#/store';

import View from './view';

const mapStateToProps = ({
  masterPassword,
  domainName,
  optionalSalt,
  autoCopy: {isEnabled: isAutoCopyEnabled},
  hashMethod: {currentMethod},
}: RootState) => ({
  masterPassword: masterPassword.value,
  domainName: domainName.value,
  optionalSalt: optionalSalt.value,
  isAutoCopyEnabled,
  hashMethod: currentMethod,
});

export default connect(
  mapStateToProps
)(View);
