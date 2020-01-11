import {connect} from 'react-redux';

import {RootState} from '#/store';

import View from './view';
import {setValue} from './actions';

const mapStateToProps = ({masterPassword: {value}}: RootState) => ({
  masterPassword: value,
});

const mapDispatchToProps = {
  setMasterPassword: setValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
