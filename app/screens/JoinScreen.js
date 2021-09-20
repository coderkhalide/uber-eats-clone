import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../configs/colors'
import AppButton from '../components/AppButton';

function JoinScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <View style={styles.content}>
                    <Text style={styles.title}>Uber Eats: Food Delivery</Text>
                    <Text style={styles.subTitle}>Get food delivery to your doorstep from thousands of amazing local and national restaurants.</Text>
                    <AppButton title="Let's go" onPress={() => navigation.navigate("Signup")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
        position: 'absolute',
        zIndex: 99999,
        top: 160
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end',
        backgroundColor: colors.dark
    },
    content: {
        backgroundColor: colors.white,
        paddingHorizontal: 25,
        paddingBottom: 25,
        paddingTop: 35,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 16,
        color: colors.gray,
        marginBottom: 10
    },
    input: {
        borderColor: colors.medium,
        backgroundColor: colors.light,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15
    },
})

export default JoinScreen