import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FlexBoxScreen } from '../screens/FlexBoxScreen';
import { ReduxTKScreen } from '../screens/ReduxTKScreen';
import { HelloScreen } from '../screens/HelloScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#167476" } }} initialRouteName="ReduxTK">
                <Stack.Screen name="FlexBox" component={FlexBoxScreen} options={{ headerTitleAlign: 'center' }} />
                <Stack.Screen name="ReduxTK" component={ReduxTKScreen} options={{ headerTitleAlign: 'center' }} />
                <Stack.Screen name="Hello" component={HelloScreen} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};