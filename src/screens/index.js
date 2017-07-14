import { Navigation } from 'react-native-navigation';

import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen, store, Provider);
};

export default registerScreens;
