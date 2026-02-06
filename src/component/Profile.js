import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text } from 'react-native'


function Profile() {

    const isFocused = useIsFocused()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isFocused) {
            setMessage('Profile Screen Active ✅')
        } else {
            setMessage('')
        }
    }, [isFocused])

    return (
        <>
            <View>
                <Text> { message } </Text>
            </View>
        </>
    )
}

export default Profile