import React, { Component } from 'react';
import { func, object, bool } from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../components/user/LoginForm';
import Loading from '../components/common/Loading';
import { login } from '../actions/userActions';

class LoginScreen extends Component {
  shouldComponentUpdate(nextProps) {
    const { authenticated, navigator } = this.props;
    if (nextProps.authenticated && !authenticated) {
      navigator.resetTo({
        screen: 'example.HomeScreen',
        title: 'Home',
        backButtonHidden: true
      });
      return false;
    }
    return true;
  }

  render() {
    const { login, loading, authenticated } = this.props;

    if (loading || authenticated) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          LOGIN
        </Text>
        <LoginForm onSubmit={user => login(user.toJS())} />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  login: func.isRequired,
  navigator: object.isRequired,
  authenticated: bool.isRequired,
  loading: bool.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated']),
  loading: state.getIn(['user', 'loading'])
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
