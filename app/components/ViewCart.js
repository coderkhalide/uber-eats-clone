import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';

const ViewCart = ({ total, count }) => {
    const navigation = useNavigation()

    return (
        <>
            {!!count && (
                <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={tailwind`bg-black absolute bottom-4 self-center py-3 px-12 rounded-full z-50`}>
                    <Text style={tailwind`text-white text-sm`}>View Cart • ${total} ({count})</Text>
                </TouchableOpacity>

            )}
        </>
    );
}

export default ViewCart;
