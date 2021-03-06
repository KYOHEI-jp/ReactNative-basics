import React, { VFC, useEffect, useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { FontAwesome } from '@expo/vector-icons'
import { RootStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native-elements'
import { Child } from '../components/Child'
import { Input } from 'react-native-elements/dist/input/Input'

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
    const [text, setText] = useState("")
    const [printText, setPrintText] = useState("")
    useEffect(() => {
        console.log("mounted Hello");
        return () => {
            console.log("unmounted Hello");
        }
    }, []);
    // stateを指定しておくことでprintMsgの関数は
    //printTextのstateが変更になるたびに関数オブジェクトを再生成してくれる
    const printMsg = useCallback(() => {
        console.log(`Print: ${printText}`);
    }, [printText]);

    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Hello</Text>
            <View style={tailwind("my-3")}>
                <Button title="Go to ReduxTK"
                    onPress={() => navigation.navigate("ReduxTK")} />
            </View>
            <Input placeholder="type print text"
                leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
                value={text}
                onChangeText={(txt) => setText(txt)} />
            <Text>{text}</Text>
            <Input
                placeholder="type print text"
                leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
                value={printText}
                onChangeText={(text) => setPrintText(text)} />
            <Text>{printText}</Text>
            <Child printMsg={printMsg} />
        </View>
    )
}