import React from 'react';
import { VFC, memo } from 'react';
import tailwind from 'tailwind-rn';
import { View, Text } from 'react-native'
import { Button } from "react-native-elements"
type Props = {
    printMsg: () => void;
}

const ChildMemo: VFC<Props> = ({ printMsg }) => {
    console.log("child rendered")
    return (
        <View>
            <Text style={tailwind("my-3")}>Child</Text>
            <Button title="Print" onPress={printMsg} />
        </View>
    )
}

export const Child = memo(ChildMemo);