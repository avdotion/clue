import {connect} from 'react-redux';

import {RootState} from '#/store';
import View from '#/components/Slider';

import {chooseMethod} from './actions';

const mapStateToProps = ({
  hashMethod: {chosenMethod, methods},
}: RootState) => ({
  chosenOption: chosenMethod,
  options: methods,
});

const mapDispatchToProps = {
  chooseOption: chooseMethod,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
