import {connect} from 'react-redux';

import {RootState} from '#/store';
import View from '#/components/Trigger';

import {trigger} from './actions';

const isAutoCopyDisabled = !Boolean(navigator && navigator.clipboard);

const mapStateToProps = ({
  autoCopy: {isEnabled},
}: RootState) => ({
  isActive: !isAutoCopyDisabled && isEnabled,
  label: 'autocopy',
  disabled: isAutoCopyDisabled,
  disabledAlert: 'AutoCopy isn\'t supported by this browser',
});

const mapDispatchToProps = {
  onTrigger: trigger,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
