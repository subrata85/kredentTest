import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

/** Start import screen */
import Splash from './src/screens/splash';
import Login from './src/screens/user/login';
import Registration from './src/screens/user/registration';

import Home from './src/screens/home/home';
import Profile from './src/screens/user/profle';
/** End import screen */

function App() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName="login">
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="registration" component={Registration} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}

export default App;
