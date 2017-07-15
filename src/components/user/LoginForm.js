import React from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button, StyleSheet } from 'react-native';

import Input from '../common/Input';
import * as constraints from '../../utils/constraints';

const LoginForm = ({ handleSubmit, error }) => (
  <View style={styles.login} onSubmit={handleSubmit}>
    {error && <Text>{error}</Text>}
    <Field
      name="email"
      label="Email"
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
  handleSubmit: func.isRequired,
  error: string
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
