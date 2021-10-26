import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.container} >
      <Text>Hello from profile Screen</Text>
      <Button title='Click Here' onPress={() => alert('you are clicked') } />
    </View>
  )
}

export default ProfileScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
