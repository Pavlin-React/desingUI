import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'


let Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={MainTabScreen} options={{headerShown: false}} />
        {/* <Drawer.Screen name='Details' component={DetailsScreen} /> */}
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
