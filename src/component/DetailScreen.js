import React, { useState, useLayoutEffect } from 'react'
import { View, Text, Button } from 'react-native'

function DetailScreen({ navigation }) {
  
  const [message, setMessage] = useState('Details Screen')
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Change"
          onPress={() => setMessage('Header Button Pressed 🚀')}
      />
      )
    })
  }, [navigation])

  return (
    <View>
      <Text>{ message }</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default DetailScreen
