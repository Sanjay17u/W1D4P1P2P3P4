import React from 'react'
import { View, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useState, useCallback } from 'react'




function Home() {

    const [message, setMessage] = useState('')

    useFocusEffect(
        useCallback(() => {
            setMessage('Home Screen Focused ✅')

            return () => {
                setMessage('')
            }
        }, [])
    )
    

    return (
        <>
            <View>
                <Text>{ message }</Text>
            </View>
        </>
    )
}

export default Home