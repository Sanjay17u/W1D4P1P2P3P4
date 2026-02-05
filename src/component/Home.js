import React from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'



function Home() {

    const isFocused = useIsFocused()

    return (
        <>
            <View>
                <Text>Status: {isFocused ? 'Focused ✅' : 'Blurred ❌' }</Text>
            </View>
        </>
    )
}

export default Home