import { Navigation } from 'react-native-navigation';

import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';
import Drawer from '../components/common/Drawer';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('example.Drawer', () => Drawer, store, Provider);
};

export default registerScreens;
