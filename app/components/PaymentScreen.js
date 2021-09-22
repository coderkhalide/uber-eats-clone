import { initStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../configs/colors';
import { fetchPublishableKey } from '../utils/helpers';
import tailwind from 'tailwind-react-native-classnames';

const PaymentScreen = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initialize() {
            const publishableKey = await fetchPublishableKey();
            if (publishableKey) {
                await initStripe({
                    publishableKey,
                    merchantIdentifier: 'merchant.com.stripe.react.native',
                    urlScheme: 'stripe-example',
                    setUrlSchemeOnAndroid: true,
                });
                setLoading(false);
            }
        }
        initialize();
    }, []);
    
    return loading ? (
        <View style={tailwind`flex-1 bg-white items-center justify-center`}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    ) : (
        <ScrollView
            accessibilityLabel="payment-screen"
            style={styles.container}
            keyboardShouldPersistTaps="handled">
            {children}
            <Text style={{ opacity: 0 }}>appium fix</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
})

export default PaymentScreen;
