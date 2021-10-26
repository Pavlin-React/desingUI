import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeScreen
