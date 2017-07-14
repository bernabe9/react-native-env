import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import LogoutButton from '../components/common/LogoutButton';

const HomeScreen = ({ logout, navigator }) => (
  <View>
    <Text>Home Screen</Text>
    <LogoutButton navigator={navigator} />
  </View>
);

export default HomeScreen;
