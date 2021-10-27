import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SupportScreen = () => {
  return (
    <View style={styles.container} >
      <Text>Hello from Support Screen</Text>
      <Button title='Click Here' onPress={() => alert('you are clicked') } />
    </View>
  )
}

export default SupportScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
