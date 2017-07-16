import React from 'react';
import { string, object, bool } from 'prop-types';
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

const Input = ({
  label,
  input: { onChange, ...restInput },
  password = false,
  keyboardType = 'default',
  meta: { touched, error }
}) => (
  <View>
    {label && <Text>{label}</Text>}
    <View>
      <TextInput
        onChangeText={text => onChange(text.trim())}
        {...restInput}
        secureTextEntry={password}
        keyboardType={keyboardType}
      />
      {touched && error &&
        <Text style={styles.error}>{error}</Text>
      }
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  keyboardType: string
};

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
});

export default Input;
