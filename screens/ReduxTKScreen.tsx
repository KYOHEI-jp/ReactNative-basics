import React, { VFC, useEffect } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { useSelector, useDispatch } from 'react-redux'
import { RootStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native-elements'
import { increment, decrement, addByPayload, selectCount, } from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
    const count = useSelector(selectCount);
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
        </View >
    )
}
