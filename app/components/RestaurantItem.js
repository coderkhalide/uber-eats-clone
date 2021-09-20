import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RestaurantItem = ({ restaurantData }) => {
    return (
        <View>
            {restaurantData?.map((item, index) => (
                <RestaurantItemCard key={index} item={item} />
            ))}
        </View>
    );
}

export default RestaurantItem;

const RestaurantItemCard = ({ item }) => {
    const [loved, setLoved] = useState(false)

    return (
        <View style={tailwind`mx-4 mb-4`}>
            <Image
                source={{ uri: item.image_url }}
                style={tailwind`w-full h-48 rounded-lg`}
            />
            <TouchableOpacity style={tailwind`absolute top-2 right-2`} onPress={() => setLoved(e => !e)}>
                <Entypo name={`${loved ? 'heart' : 'heart-outlined'}`} size={28} color="#fff" />
            </TouchableOpacity>
            <View style={tailwind`flex-row items-center mt-1`}>
                <View style={tailwind`flex-grow`}>
                    <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>{item.name}</Text>
                    <View style={tailwind`flex-row items-center`}>
                        <MaterialCommunityIcons name="clock-time-four" size={13} color="#06C167" />
                        <Text style={tailwind`text-xs text-gray-700`}> 20-30 • min • {item.price}</Text>
                    </View>
                </View>
                <View style={tailwind`w-8 h-8 justify-center items-center bg-gray-100 rounded-full`}>
                    <Text style={tailwind`text-gray-600 text-xs`}>{item.rating}</Text>
                </View>
            </View>
        </View>
    )
}