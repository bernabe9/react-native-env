import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';

import registerScreens from './screens';

import configureStore from './store/configureStore';

const store = configureStore(Immutable.Map());

registerScreens(store, Provider);

class App {
  constructor() {
    this.appInitialized = false;
    this.authenticated = false;
    sessionService.initSessionService(store);

    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    if (!this.appInitialized) {
      const checked = session.get('sessionChecked');
      if (checked) {
        this.appInitialized = true;
        this.authenticated = authenticated;
        this.startApp(authenticated);
      }
    } else if (this.authenticated !== authenticated) {
      this.authenticated = authenticated;
      this.startApp(authenticated);
    }
  }

  startApp(authenticated) {
    if (authenticated) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'example.HomeScreen',
          title: 'Home',
          navigatorStyle: {},
          leftButtons: [{
            id: 'sideMenu'
          }]
        },
        drawer: {
          left: {
            screen: 'example.Drawer'
          }
        }
      });
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'example.LoginScreen',
          title: 'Login',
          navigatorStyle: {}
        }
      });
    }
  }
}

export default App;
