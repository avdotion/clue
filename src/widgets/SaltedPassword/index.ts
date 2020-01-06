import {connect} from 'react-redux';

import {RootState} from '#/store';

import View from './view';

const mapStateToProps = ({
  masterPassword,
  domainName,
  optionalSalt,
  autoCopy: {isEnabled: isAutoCopyEnabled},
  hashMethod: {chosenMethod},
}: RootState) => ({
  masterPassword: masterPassword.value,
  domainName: domainName.value,
  optionalSalt: optionalSalt.value,
  isAutoCopyEnabled,
  hashMethod: chosenMethod,
});

export default connect(
  mapStateToProps
)(View);
