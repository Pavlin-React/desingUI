import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen'
import SettingsScreen from './screens/SettingsScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import RootStackScreen from './screens/RootStackScreen'


let Drawer = createDrawerNavigator();

const App = () => {

  let [isLoading, setIsLoading] = useState(true)
  let [userToken, setUserToken] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])

  if (isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} options={{headerShown: false}}/>
        <Drawer.Screen name='SupportScreen' component={SupportScreen} />
        <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
        <Drawer.Screen name='BookmarkScreen' component={BookmarkScreen} />
      </Drawer.Navigator> */}
      
    </NavigationContainer>
  );
};

export default App;
