import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import colors from '../configs/colors';

function OtherSignin({ title, icon, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name={icon} size={24} color="black" />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: colors.medium,
        backgroundColor: colors.light,
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginLeft: 10
    }
})

export default OtherSignin