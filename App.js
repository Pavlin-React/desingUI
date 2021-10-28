import React from 'react';
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
