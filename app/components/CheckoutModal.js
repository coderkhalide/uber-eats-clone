import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import tailwind from 'tailwind-react-native-classnames';
import { selectCartItems, selectTotalPrice, updateBusket } from '../redux/slices/basketSlice';
import { db, timestamp } from '../configs/firebase'
import { selectUser } from '../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/core';

const CheckoutModal = ({ setModalVisible }) => {
    const totalPrice = useSelector(selectTotalPrice)
    const allCartItems = useSelector(selectCartItems)
    const [loading, setLoading] = useState(false);
    const user = useSelector(selectUser)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const addOrder = () => {
        setLoading(true);
        db.collection("orders")
            .add({
                items: allCartItems,
                email: user?.email,
                timestamp
            })
            .then(() => {
                setLoading(false);
                dispatch(updateBusket([]))
                navigation.navigate("SuccessScreen");
                setModalVisible(false)
            })
            .catch(e => {
                setLoading(false)
                Alert.alert('Error', e.message)
            })
    }

    return (
        <>
            {loading ? (
                <View style={tailwind`flex-1 bg-white items-center justify-center`}>
                    <Image source={require('../assets/images/loaging.gif')} style={tailwind`w-72 h-72`} />
                </View>
            ) : (
                <View style={tailwind`flex-1 bg-black bg-opacity-40`}>
                    <TouchableOpacity style={tailwind`flex-grow`} onPress={() => setModalVisible(false)}>

                    </TouchableOpacity>
                    <View style={tailwind`pb-5  w-full px-4 bg-white pt-4`}>
                        <Text style={tailwind`text-black text-center text-xl font-bold mb-5`}>Checkout details</Text>
                        <View style={tailwind`mb-5`}>
                            {allCartItems?.map(item => (
                                <OrderItem key={item.resName} name={item.resName} value={`$${item?.foods.reduce((total, item) => total + item.price, 0).toFixed(1)} • (${item?.foods?.length})`} />
                            ))}
                            <OrderItem name="Total price" value={`$${totalPrice}`} total />
                        </View>
                        <TouchableOpacity style={tailwind`py-3 px-10 self-center bg-black rounded-full`} onPress={addOrder}>
                            <Text style={tailwind`text-white`}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
}

export default CheckoutModal;

const OrderItem = ({ name, value, total }) => (
    <View style={tailwind`flex-row justify-between py-3 border-gray-200 items-center ${total ? 'border-t' : 'border-b'}`}>
        <Text style={tailwind`text-black font-bold text-black ${total && 'text-lg'}`} numberOfLines={1}>{name}</Text>
        <Text style={tailwind`text-black text-xs ${total && 'font-bold'}`}>{value}</Text>
    </View>
)