import {connect} from 'react-redux';

import {RootState} from '#/store';
import View from '#/components/Dropdown';

import {chooseMethod, setDroppedOut} from './actions';

const mapStateToProps = ({
  hashMethod: {currentMethod, methods, isDroppedOut},
}: RootState) => ({
  currentOption: currentMethod,
  options: methods,
  isDroppedOut: isDroppedOut,
});

const mapDispatchToProps = {
  chooseOption: chooseMethod,
  setDroppedOut: setDroppedOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
