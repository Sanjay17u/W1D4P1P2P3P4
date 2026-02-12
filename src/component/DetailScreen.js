import React, { useState, useLayoutEffect } from 'react'
import { View, Text, Button } from 'react-native'

function DetailScreen({ navigation }) {
  
  const [message, setMessage] = useState('Details Screen')
  const [count, setCount] = useState(0)
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Details (${count})`,

      headerStyle: {
      backgroundColor: 'black',
    },
      headerTintColor: 'white',
    
      headerBackVisible: false,

    headerLeft: () => (
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
        color="blue"
      />
    ),

    headerRight: () => (
      <Button
        title="Toggle"
        onPress={() => setCount(count + 1)}
        color="blue"
      />
    ),
    })
  }, [navigation, count])

  return (
    <View>
      <Text>{ message }</Text>
    </View>
  )
}

export default DetailScreen
