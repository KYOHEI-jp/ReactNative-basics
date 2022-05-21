import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

export const HelloScreen = () => {
    useEffect(() => {
        console.log("mounted Hello");
        return () => {
            console.log("unmounted Hello");
        }
    }, []);
    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text></Text>
        </View>
    )
}