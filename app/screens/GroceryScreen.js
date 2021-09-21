import React from 'react';
import { View, Image, Text } from 'react-native';
import Screen from '../components/Screen';
import tailwind from 'tailwind-react-native-classnames';

const GroceryScreen = () => {
    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <View style={tailwind`flex-1 justify-center items-center`}>
                <Image source={require('../assets/images/store-open.gif')} style={tailwind`w-72 h-72`} />
                <View style={tailwind`w-3/4`}>
                    <Text style={tailwind`text-lg text-center`}>Sorry, Grocery is not available right now</Text>
                    <Text style={tailwind`text-lg text-center text-xs text-gray-600 mt-3`}>Go to you near Grocery shop and buy 🙃😉</Text>
                </View>
            </View>
        </Screen>
    );
}


export default GroceryScreen;
