import {connect} from 'react-redux';
import {identity} from '#/pitaya/helpers/fp';
import View from './view';

const mapStateToProps = identity;

export default connect(mapStateToProps)(View);
