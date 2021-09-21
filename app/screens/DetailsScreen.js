import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../configs/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import tailwind from 'tailwind-react-native-classnames';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import RestaurantMap from '../components/RestaurantMap'

const DetailsScreen = ({ route, navigation }) => {
    const [mapActive, setMapActive] = useState(false)
    const { categories, coordinates, image_url, name, price, rating, review_count } = route?.params?.item

    return (
        <View style={styles.container}>
            <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={18} color={colors.black} />
            </TouchableOpacity>
            <View style={styles.mapImageWrpper}>
                {mapActive ? (
                    <RestaurantMap coordinates={coordinates} title={name} />
                ) : (
                    <Image source={{ uri: image_url }} style={styles.image} />
                )}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={tailwind`z-20`}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{name}</Text>
                        <TouchableOpacity onPress={() => setMapActive(e => !e)}>
                            <Entypo name="location" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={styles.info}>
                            <View style={styles.infoItem}>
                                <AntDesign name="star" size={12} color="#FFC238" />
                                <Text style={styles.infoText}>{rating} • ({review_count})</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <AntDesign name="clockcircleo" size={10} color={colors.black} />
                                <Text style={styles.infoText}>20-30 min</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Foundation name="dollar" size={16} color={colors.primary} />
                                <Text style={styles.infoText}>• {price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tailwind`mt-3`}>
                        <Text style={[tailwind`text-gray-800 font-bold border-b w-1/3 mb-2 pb-1`, { borderBottomColor: colors.primary, fontSize: 17 }]}>Categories</Text>
                        {categories.map(({ title }, index) => (
                            <Text key={index} style={tailwind`text-xs text-gray-700`}><Text style={{ color: colors.primary }}>•</Text> {title}</Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        position: 'relative',
        flex: 1
    },
    mapImageWrpper: {
        position: 'absolute',
        width: '100%',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        height: 260
    },
    content: {
        position: 'relative',
        zIndex: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginTop: 220,
        paddingBottom: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    title: {
        fontSize: 23,
        color: colors.title,
        fontWeight: '700',
        maxWidth: '80%'
    },
    price: {
        fontSize: 20,
        color: colors.primary,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 3,
        backgroundColor: colors.light,
        borderRadius: 5,
        marginRight: 7
    },
    infoText: {
        marginLeft: 4,
        fontSize: 12
    },
})

export default DetailsScreen;
