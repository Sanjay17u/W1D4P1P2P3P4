import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

function HomeScreen({ navigation }) {

  const [message, setMessage] = useState('')

  return (

    <View>
      <Text>{message}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  )
}

export default HomeScreen
