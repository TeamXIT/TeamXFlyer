import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './Screens/Authn/LoginScreen';
import RegisterScreen from './Screens/Authn/RegisterScreen';

import SplashScreen from './Screens/Authn/SplashScreen';
import Dashboard from './Screens/Dashboard/Dashboard';
import VerificationScreen from './Screens/Authn/VerificationScreen';

const Stack = createStackNavigator();

const Authn = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Authn"
          component={Authn}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;