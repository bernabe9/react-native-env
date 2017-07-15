import React from 'react';
import { object } from 'prop-types';
import { View, Text } from 'react-native';

import LogoutButton from '../components/common/LogoutButton';

const HomeScreen = ({ navigator }) => (
  <View>
    <Text>Home Screen</Text>
    <LogoutButton navigator={navigator} />
  </View>
);

HomeScreen.propTypes = {
  navigator: object.isRequired
};

export default HomeScreen;
