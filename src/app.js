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
    sessionService.initSessionService(store);

    const unsubscribe = store.subscribe(() => {
      const session = store.getState().get('session');
      const checked = session.get('sessionChecked');
      const authenticated = session.get('authenticated');
      if (checked) {
        this.startApp(authenticated);
        unsubscribe();
      }
    });
  }

  startApp(authenticated) {
    if (authenticated) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'example.HomeScreen',
          title: 'Home',
          navigatorStyle: {}
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
