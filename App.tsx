import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import Home from './src/component/Home.js'
import Profile from './src/component/Profile.js'
import Setting from './src/component/Setting.js'

const Tab = createBottomTabNavigator()

function App() {
  return (
    <>
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Profile' component={Profile} />
          <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}


export default App