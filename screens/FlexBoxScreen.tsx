import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

export const FlexBoxScreen = () => {
    useEffect(() => {
        console.log("mounted FlexBox");
        return () => {
            console.log("unmounted FlexBox");
        }
    }, []);
    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text></Text>
        </View>
    )
}