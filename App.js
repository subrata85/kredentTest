
import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/** Start import screen */
import Splash from "./src/screens/splash";
import Login from "./src/screens/user/login"
/** End import screen */



// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function HomeScreen1() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen111</Text>
//     </View>
//   );
// }

// function DrawerHome() {
//   return (
//     <Drawer.Navigator headerMode={""}>
//       <Drawer.Screen name="Home" component={HomeScreen1} />
//     </Drawer.Navigator>
//   );
// }


function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator headerMode={"none"} initialRouteName="splash">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        {/* <Stack.Screen name="Dhome" component={DrawerHome} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
