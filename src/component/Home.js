import React from 'react'
import { View, Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'




function Home() {

    const isFocused = useIsFocused()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isFocused) {
            setMessage('Home Screen Active ✅')
        } else {
            setMessage('')
        }
    }, [isFocused])
    

    return (
        <>
            <View>
                <Text>{ message }</Text>
            </View>
        </>
    )
}

export default Home