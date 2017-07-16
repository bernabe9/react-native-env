import React from 'react';
import { object } from 'prop-types';
import { View, Text } from 'react-native';

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

HomeScreen.propTypes = {
  navigator: object.isRequired
};

export default HomeScreen;
