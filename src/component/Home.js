import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen.js'
import DetailScreen from './DetailScreen.js'


const Stack = createNativeStackNavigator()

function Home() {
 
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='DetailScreen' component={DetailScreen} />
            </Stack.Navigator>
        </>
    )
}

export default Home