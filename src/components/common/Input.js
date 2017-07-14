import React from 'react';
import { string, object, bool } from 'prop-types';
import { View, TextInput, Text } from 'react-native';

const Input = ({
  label,
  input: { onChange, ...restInput },
  password = false,
  meta: { touched, error }
}) => (
  <View>
    {label && <Text>{label}</Text>}
    <View>
      <TextInput onChangeText={onChange} {...restInput} secureTextEntry={password} />
      {touched && error && <Text>{error}</Text>}
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool
};

export default Input;
