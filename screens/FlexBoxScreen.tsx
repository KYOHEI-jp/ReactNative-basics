import React, { VFC, useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { RootStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native-elements'

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
            <Text>FlexBox</Text>
            <View style={tailwind("my-3")}>
                <Button title="Go to Hello"
                    onPress={() => navigation.navigate("Hello")} />
            </View>
        </View>
    )
}