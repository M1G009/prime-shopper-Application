import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import ImageButton from '../UI/buttons/ImageButton'

const OrderCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('OrderDetailsScreen')}>
            <View style={styles.detailsContainer}>
                <Image source={require('../../assets/images/product-photo.png')} style={styles.image} />
                <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 3 }}>
                    <Text numberOfLines={1} style={globalStyle.textSemiBold}>Traditional Dress</Text>
                    <Text style={globalStyle.textRegular}>
                        $99.99
                        <Text style={globalStyle.discount}>  $1000.00</Text>
                    </Text>
                    <Text style={globalStyle.small}>
                        Delivered By
                        <Text style={globalStyle.days}> 2 - 7 Days</Text>
                    </Text>
                </View>
            </View>
            <ImageButton source={require('../../assets/images/chevron-right.png')} style={{ height: 16, width: 16 }} />
        </TouchableOpacity>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 1
    },
    detailsContainer: {
        flexDirection: 'row',
        flex: 1
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 10
    }
})
