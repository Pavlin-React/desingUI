import React from 'react'
import { View, Text, Button } from 'react-native'

const SignInScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from Details Screen</Text>
      <Button
        title="Hi from SignIn Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default SignInScreen
