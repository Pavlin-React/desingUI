import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator();

let HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

let DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from Details Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Overview"}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
