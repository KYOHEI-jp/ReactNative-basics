import React from 'react';
import tailwind from 'tailwind-rn';
import { View, Text } from 'react-native'

export const Child = () => {
    console.log("child rendered")
    return (
        <View>
            <Text style={tailwind("my-3")}>Child</Text>
        </View>
    )
}