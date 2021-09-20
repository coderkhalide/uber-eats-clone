import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function ({error, visible}) {
    if(!error || !visible) return null;
    return (
        <Text style={styles.errorMessage}>{error}</Text>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 14,
        color: 'red',
        marginVertical: 2
    }
})
