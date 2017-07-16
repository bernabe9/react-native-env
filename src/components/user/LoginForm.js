import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Button, StyleSheet } from 'react-native';

import Input from '../common/Input';
import * as constraints from '../../utils/constraints';

const LoginForm = ({ handleSubmit }) => (
  <View style={styles.login} onSubmit={handleSubmit}>
    <Field
      name="email"
      label="Email"
      keyboardType="email-address"
      component={Input}
    />
    <Field
      name="password"
      label="Password"
      component={Input}
      password
    />
    <Button title="LOGIN" onPress={handleSubmit} />
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired
};

const styles = StyleSheet.create({
  login: {
    width: 230
  }
});

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
