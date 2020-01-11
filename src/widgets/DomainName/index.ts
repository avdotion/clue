import {connect} from 'react-redux';

import {RootState} from '#/store';

import View from './view';
import {setValue} from './actions';

const mapStateToProps = ({domainName: {value}}: RootState) => ({
  domainName: value,
});

const mapDispatchToProps = {
  setDomainName: setValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
