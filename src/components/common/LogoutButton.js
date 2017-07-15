import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { logout } from '../../actions/userActions';

class LogoutButton extends Component {
  propTypes = {
    authenticated: bool.isRequired,
    navigator: object.isRequired,
    logout: func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { authenticated, navigator } = this.props;
    if (nextProps.authenticated !== authenticated) {
      navigator.push({
        screen: 'example.LoginScreen',
        title: 'Login',
        backButtonHidden: true
      });
    }
  }

  render() {
    const { logout } = this.props;

    return (
      <Button
        onPress={logout}
        title="Logout"
      />
    );
  }
}

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(LogoutButton);
