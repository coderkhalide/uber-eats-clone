import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tailwind from 'tailwind-react-native-classnames';
import { selectCartItems, updateBusket } from '../redux/slices/basketSlice';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../configs/colors';

const CartItems = () => {
    const allCartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const match = (id, resName) => {
        const resIndex = allCartItems.findIndex(item => item.resName === resName)
        if (resIndex >= 0) {
            const menuIndex = allCartItems[resIndex].foods.findIndex(item => item.id === id)
            if (menuIndex >= 0) return true
            return false
        } return false
    }

    const handleRemove = (id, resName, resImage) => {
        const resIndex = allCartItems.findIndex(item => item.resName === resName)

        if (resIndex >= 0) {
            const menuIndex = allCartItems[resIndex].foods.findIndex(item => item.id === id)
            if (menuIndex >= 0) {
                let oldArrays = [...allCartItems]
                let oldfoods = [...oldArrays[resIndex].foods]
                oldfoods.splice(menuIndex, 1)
                oldArrays.splice(resIndex, 1)
                let newArray = oldfoods.length ? [...oldArrays, { foods: oldfoods, resName, resImage }] : oldArrays
                dispatch(updateBusket(newArray))
            }
        }
    }

    return (
        <ScrollView style={tailwind`mx-4 mt-3`} showsVerticalScrollIndicator={false}>
            {!!(!allCartItems?.length) && <Text style={tailwind`text-center text-black`}>No cart items!</Text>}
            {allCartItems?.map(item => (
                <View key={item.resName} style={tailwind`mb-4`}>
                    <View style={tailwind`mb-4 relative justify-center`}>
                        <Image style={tailwind`w-full h-16 rounded-lg`} source={{ uri: item.resImage }} />
                        <View style={[tailwind`absolute top-0 left-0 w-full h-full bg-black rounded-lg`, { opacity: 0.5 }]} />
                        <Text style={tailwind`absolute self-center text-white w-3/4 text-center font-bold text-xl`} numberOfLines={1}>{item.resName}</Text>
                    </View>
                    {item?.foods?.map((food) => (
                        <View style={tailwind`mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100`} key={food.id} >
                            <View style={tailwind`flex-1 pr-3 flex-row items-center`}>
                                {match(food.id, item.resName) ? (
                                    <BouncyCheckbox fillColor={colors.black} isChecked={true} onPress={() => handleRemove(food.id, item.resName, item.resImage)} />
                                ) : (
                                    <BouncyCheckbox fillColor={colors.black} isChecked={false} onPress={() => handleRemove(food.id, item.resName, item.resImage)} />
                                )}
                                <View style={tailwind`flex-1 pl-2`}>
                                    <Text style={[tailwind`text-gray-900 font-bold mb-1`, { fontSize: 16 }]}>{food.title}</Text>
                                    <Text style={tailwind`text-gray-800 text-xs`}>${food.price}</Text>
                                    <Text style={tailwind`text-gray-600 text-xs`}>{food.description}</Text>
                                </View>
                            </View>
                            <View style={tailwind``} >
                                <Image style={tailwind`h-16 w-16 rounded-lg`} source={{ uri: food.image }} />
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default CartItems;
