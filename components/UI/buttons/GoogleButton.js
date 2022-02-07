import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { placeholderTextColor } from '../../../constants/colors'

const GoogleButton = () => {
    return (
        <TouchableOpacity style={{width: '40%',  marginHorizontal: 10}}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/google.png')} style={styles.image} />
                <Text style={styles.text}>Google</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoogleButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: placeholderTextColor
    },
    image: {
        height: 28,
        width: 28,
        resizeMode: 'contain',
        marginRight: 10
    },
    text: {
        fontFamily: 'Montserrat-SemiBold'
    }
})
