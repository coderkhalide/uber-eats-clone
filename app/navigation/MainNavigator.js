import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../screens/HomeScreen'

export default function MainNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}