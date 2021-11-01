import React, {useEffect, useState, useMemo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';

import {AuthContext} from './components/context';

let Drawer = createDrawerNavigator();

const App = () => {
  // let [isLoading, setIsLoading] = useState(true);
  // let [userToken, setUserToken] = useState(null);

  let initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  let loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETREIVED_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false};
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false};
    }
  }

  let authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('fghj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fghj');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="HomeDrawer"
              component={MainTabScreen}
              options={{headerShown: false}}
            />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
