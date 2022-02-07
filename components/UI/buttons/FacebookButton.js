import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const FacebookButton = () => {
    return (
        <TouchableOpacity style={{width: '40%',  marginHorizontal: 10}}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/facebook.png')} style={styles.image} />
                <Text style={styles.text}>Facebook</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FacebookButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4267B2',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 26,
        width: 26,
        resizeMode: 'contain',
        marginRight: 10
    },
    text: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold'
    }
})
