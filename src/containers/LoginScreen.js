import React, { Component } from 'react';
import { func, object, bool } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../components/user/LoginForm';
import { login } from '../actions/userActions';

class LoginScreen extends Component {
  componentWillReceiveProps(nextProps) {
    const { authenticated, navigator } = this.props;
    if (nextProps.authenticated && !authenticated) {
      navigator.resetTo({
        screen: 'example.HomeScreen',
        title: 'Home',
        backButtonHidden: true
      });
    }
  }

  render() {
    const { login } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          LOGIN
        </Text>
        <LoginForm onSubmit={user => login(user.toJS())} />
      </View>
    )
  }
}

LoginScreen.propTypes = {
  login: func.isRequired,
  navigator: object.isRequired,
  authenticated: bool.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});

export default connect(mapState, mapDispatch)(LoginScreen);
