import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import Box from '../UI/Box'

const ProductCard = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetailsScreen')}>
            <View style={styles.container}>

                <Image source={require('../../assets/images/bag.png')} style={styles.bag} />

                <Image source={props.item.image} style={styles.image} />
                <Box />

                <Text style={globalStyle.textRegular12}>{props.item.category}</Text>
                <Text numberOfLines={1} style={globalStyle.textSemiBold}>{props.item.name}</Text>

                <Text style={globalStyle.textRegular}>
                    {props.item.price} <Box width={5} />
                    <Text style={globalStyle.discount}>{props.item.discount}</Text>
                </Text>

                <Box />

                <View style={styles.colorsContainer}>
                    {[0, 1, 2, 3, 4].map((item, index) => <View style={{ ...styles.round, backgroundColor: props.item.colors[index] }}></View>)}
                    {props.item.colors.length > 5 && <Text> +5</Text>}
                </View>

                <Box />


            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: 210,
        width: '100%',
        borderRadius: 10,
    },
    colorsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    round: {
        height: 20,
        width: 20,
        marginRight: 5,
        borderRadius: 50
    },
    bag: {
        position: 'absolute',
        zIndex: 10,
        top: 10,
        right: 10,
        height: 25,
        width: 25,
        resizeMode: 'contain'
    }
})
