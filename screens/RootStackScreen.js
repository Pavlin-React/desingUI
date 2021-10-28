import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import SplashScreen from './SplashScreen'

let RootStack = createNativeStackNavigator()

let RootStackScren = ({navigation}) => {
  return(
    <RootStack.Navigator screenOptions={{headerShown: false}} >
      <RootStack.Screen name='SplashScreen' component={SplashScreen} />
      <RootStack.Screen name='SignInScreen' component={SignInScreen} />
      <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
    </RootStack.Navigator>
  )
}

export default RootStackScren
