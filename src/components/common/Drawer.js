import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LogoutButton from './LogoutButton';

const Drawer = () => (
  <View style={styles.container}>
    <Text>Drawer</Text>
    <LogoutButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  }
});

export default Drawer;
