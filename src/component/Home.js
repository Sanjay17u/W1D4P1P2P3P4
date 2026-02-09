import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen.js'
import DetailScreen from './DetailScreen.js'


const Stack = createNativeStackNavigator()

function Home() {
 
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                    title: 'Home',
                    headerBackVisible: false,
                }} />
                <Stack.Screen name='DetailScreen' component={DetailScreen} options={{
                    title: 'Details',
                }} />
            </Stack.Navigator>
        </>
    )
}

export default Home