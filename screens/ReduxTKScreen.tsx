import React, { VFC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { RootStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Input } from 'react-native-elements'
import { increment, decrement, addByPayload, selectCount, } from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
    const [amount, setAmount] = useState('0')
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const incrementAmount = Number(amount) || 0;

    useEffect(() => {
        console.log("mounted ReduxTK");
        return () => {
            console.log("unmounted ReduxTK");
        }
    }, []);
    return (
        <View style={tailwind('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Redux ToolKit {count}</Text>
            <View style={tailwind("my-3")}>
                <Button title="Go to FlexBox"
                    onPress={() => navigation.navigate("FlexBox")} />
            </View>
            <View style={tailwind("my-1")}>
                <Button title="increment" onPress={() => dispatch(increment())} />
            </View>
            <View style={tailwind("my-1")}>
                <Button title="decrement" onPress={() => dispatch(decrement())} />
            </View>
            <Input
                placeholder="type add number"
                leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
                value={amount}
                onChangeText={(text: String) => setAmount(text)}
            />
            <View style={tailwind("my-1")}>
                <Button
                    title="increment by amount"
                    onPress={() => {
                        dispatch(addByPayload(incrementAmount));
                        setAmount("0");
                    }}
                />
            </View>
        </View >
    )
}
