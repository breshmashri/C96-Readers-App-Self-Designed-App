import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/Login';
import Home from './screens/Home';
import Newspaper from './screens/Newspaper';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: Login,
  Home: Home,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
