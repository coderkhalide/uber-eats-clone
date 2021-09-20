import React, { useEffect } from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import colors from '../../configs/colors'

function ImageInput({imageUri, onChangeImage}) {

    const requestPermissions = async () => {
        const { status  } = ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'denied') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
    }

    useEffect(() => {
        requestPermissions()
    }, [])

    const selectImage = async () =>{
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5,
              allowsEditing: true,
              aspect: [4, 3],
          })
          if(!result.cancelled) onChangeImage(result.uri)
        } catch (error) {
          console.log("Error Reading an image", error)
        }
    }

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            {text: 'yes', onPress: () => onChangeImage(null)},
            {text: 'no'}
        ])
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri ? (<MaterialCommunityIcons name="camera" color={colors.medium} size={35}/>) : 
                (
                    <Image style={styles.image} source={{uri: imageUri}}/>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageInput