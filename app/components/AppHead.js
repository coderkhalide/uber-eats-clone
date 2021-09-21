import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../configs/colors'
import { useNavigation } from '@react-navigation/native';

function AppHead({ title, icon = null }) {
    const navigation = useNavigation()

    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.topBar_icon} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={26} color={colors.black} />
            </TouchableOpacity>
            <View style={styles.topBar_center}>
                {icon && <Ionicons style={styles.icon} name={icon} size={27} color="black" />}
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'relative',
        backgroundColor: colors.white,
        borderColor: colors.medium,
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    topBar_icon: {
        top:  0,
        left: 10,
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    topBar_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 17
    },
    icon: {
        marginRight: 10
    }
})

export default AppHead