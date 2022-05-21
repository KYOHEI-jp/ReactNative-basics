import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

export const ReduxTKScreen = () => {
    useEffect(() => {
        console.log("mounted ReduxTK");
        return () => {
            console.log("unmounted ReduxTK");
        }
    }, []);
    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Redux ToolKit</Text>
        </View >
    )
}
