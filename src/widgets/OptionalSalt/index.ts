import {connect} from 'react-redux';

import {RootState} from '#/store';
import {Input as View} from '#/components/Input';

import {setValue} from './actions';

const mapStateToProps = ({optionalSalt: {value}}: RootState) => ({
  inputValue: value,
});

const mapDispatchToProps = {
  inputChangeAction: setValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
