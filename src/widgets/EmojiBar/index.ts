import {connect} from 'react-redux';

import {RootState} from '#/store';

import View from './view';

const mapStateToProps = ({
  masterPassword,
  domainName,
  optionalSalt,
}: RootState) => ({
  masterPassword: masterPassword.value,
  domainName: domainName.value,
  optionalSalt: optionalSalt.value,
});

export default connect(
  mapStateToProps
)(View);
