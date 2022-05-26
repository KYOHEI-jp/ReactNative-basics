import React, { VFC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { RootStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native-elements'
import { Child } from '../components/Child'

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
    const [text, setText] = useState("")
    useEffect(() => {
        console.log("mounted Hello");
        return () => {
            console.log("unmounted Hello");
        }
    }, []);
    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Hello</Text>
            <View style={tailwind("my-3")}>
                <Button title="Go to ReduxTK"
                    onPress={() => navigation.navigate("ReduxTK")} />
            </View>
            <Child />
        </View>
    )
}