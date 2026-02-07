import React, { useState, useCallback } from 'react'
import { View, Text, Button } from 'react-native'

function HomeScreen({ navigation }) {

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
