import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './Screens/Authn/LoginScreen';
import RegisterScreen from './Screens/Authn/RegisterScreen';

import SplashScreen from './Screens/Authn/SplashScreen';
import Dashboard from './Screens/Dashboard/Dashboard';
import VerificationScreen from './Screens/Authn/VerificationScreen';

import { Provider as ReduxProvider } from 'react-redux';
import store from './Screens/Helper/Reducers/store';
import { Pressable, Alert } from 'react-native';
import flatList_ex from './Screens/Dashboard/FlatList';
import sectionList_ex from './Screens/Dashboard/sectionList';
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
    <ReduxProvider store={store}>
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
           <Stack.Screen 
          name="FlatList" 
          component={flatList_ex} 
          options={  {title:'',headerLeft:() => (<Pressable onPress={()=>{Alert.alert('Back')}}><Image source={require('./assets/images/back.png')} style={{height:25,resizeMode:'cover',width:22}}/></Pressable>),
          headerRight:() => (<Pressable onPress={()=>{Alert.alert('Notification')}}><Image source={require('./assets/images/bell.png')} style={{height:25,resizeMode:'cover',width:22}}/></Pressable>)}}
          />
          <Stack.Screen 
          name="SectionList" 
          component={sectionList_ex} 
          options={  {title:'',headerLeft:() => (<Pressable onPress={()=>{Alert.alert('Back')}}><Image source={require('./assets/images/back.png')} style={{height:25,resizeMode:'cover',width:22}}/></Pressable>),
          headerRight:() => (<Pressable onPress={()=>{Alert.alert('Notification')}}><Image source={require('./assets/images/bell.png')} style={{height:25,resizeMode:'cover',width:22}}/></Pressable>)}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}



export default App;