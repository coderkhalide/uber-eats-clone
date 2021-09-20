import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import { AntDesign } from '@expo/vector-icons';
import AppErrorMessage from './AppErrorMessage'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../configs/colors'

export default function AppFormFeilds({name, password = false, ...otherProps}) {
    const [showPassword, setShowPassword] = useState(password)
    const {setFieldTouched, handleChange, errors, touched, values } = useFormikContext()

    return (
        <View style={styles.container}>
            <TextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
                style={[styles.input, (touched[name] && errors[name]) && { borderColor: colors.denger }]}
                secureTextEntry={showPassword}
                value={values[name]}
            />
            {password && (
                <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <AntDesign name="eye" size={24} color={colors.black} />
                    ) : (
                        <AntDesign name="eyeo" size={24} color={colors.black} />
                    )}
                </TouchableOpacity>
            )}
            <AppErrorMessage visible={touched[name]} error={errors[name]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
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
    inputError: {
        borderColor: colors.denger
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 32
    }
})
