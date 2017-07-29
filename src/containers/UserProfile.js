import {connect} from 'react-redux';

import UserProfile from '../component/example/UserProfile';
import * as actions from '../reducers/user';

function mapStateToProps(state) {
  const userProfile = state.user.get('userProfile');

  return {
    userProfile,
  }
}

const mapDispatchToProps = {
  getUserProfile: actions.getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);