import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { VFC, useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { RootStackParamList } from '../types/types'

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: VFC<Props> = ({ navigation }) => {
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