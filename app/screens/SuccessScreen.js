import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import colors from '../configs/colors'
import { useNavigation } from '@react-navigation/native';
import tailwind from 'tailwind-react-native-classnames';

function SuccessScreen() {
    const navigation = useNavigation()

    return (
        <Screen style={styles.container}>
            <View style={styles.content}>
                <Image source={ require('../assets/images/blink.gif') } style={tailwind`w-72 h-72`} />
                <Text style={styles.title}>Congratulations!!!</Text>
                <Text style={styles.text}>Your order have been taken successfully!</Text>
                <View style={styles.buttons}>
                    <AppButton onPress={() => navigation.navigate('Home')} title="Continue shopping" color="black" />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }, 
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    text: {
        width: 280, 
        textAlign: 'center',
        marginTop: 10,
        color: colors.gray
    },
    buttons: {
        width: '70%',
        marginTop: 20
    }
})

export default SuccessScreen