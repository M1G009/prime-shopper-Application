import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const HomeProductCard = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.item.image} style={styles.image} />
            <Text style={styles.name}>{props.item.name}</Text>
            <Text style={styles.discount}>{props.item.discount}% Discount</Text>
        </View>
    )
}

export default HomeProductCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: '100%',
        alignItems: 'center',
        overflow: 'hidden'
    },
    name: {
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold'
    },
    discount: {
        fontFamily: 'Montserrat-Regular'
    },
    image: {
        width: '100%',
        height: '75%',
        resizeMode: 'cover',
    }
})
