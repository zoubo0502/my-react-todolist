import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibility } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    active: state.visibility === ownProps.filter
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    onClick: () => dispatch(setVisibility(ownProps.filter))
  })
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default  FilterLink