import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { logout } from '../../actions/userActions';

const LogoutButton = ({ logout }) => (
  <Button
    onPress={() => logout()}
    title="Logout"
  />
);

LogoutButton.propTypes = {
  logout: func.isRequired
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatch)(LogoutButton);
