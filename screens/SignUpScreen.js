import React from 'react'
import { View, Text, Button } from 'react-native'

const SignUpScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello from Details Screen</Text>
      <Button
        title="Hi from SignUp Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default SignUpScreen
