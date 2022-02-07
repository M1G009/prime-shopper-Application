import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import ImageButton from '../UI/buttons/ImageButton'

const OrderSummaryCard = () => {

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/images/product-photo.png')} style={styles.image} />

            <View style={styles.contents}>

                <Text numberOfLines={1} style={styles.name}>Traditional Dress</Text>
                <Text style={globalStyle.price}>
                    $99.99
                    <Text style={globalStyle.discount}>  $1000.00</Text>
                </Text>
                <Text style={globalStyle.small}>
                    Delivered By
                    <Text style={globalStyle.days}> 2 - 7 Days</Text>
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>

                    <View style={styles.quantityContainer}>

                        <TouchableOpacity style={{flex: 1}}><Text style={styles.operator}>-</Text></TouchableOpacity>
                        <Text style={styles.count}>1</Text>
                        <TouchableOpacity style={{flex: 1}}><Text style={styles.operator}>+</Text></TouchableOpacity>

                    </View>

                    <Text style={styles.laterText}>Save For Later</Text>
                </View>

            </View>

            <View style={{ height: '100%' }}>
                <ImageButton source={require('../../assets/images/close.png')} style={{ height: 14, width: 14 }} />
            </View>

        </View>
    )
}

export default OrderSummaryCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 90,
        width: 60,
        resizeMode: 'cover',
        borderRadius: 10
    },
    contents: {
        flex: 1,
        height: '100%',
        paddingLeft: 10
    },
    name: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        marginRight: 30
    },
    laterText: {
        fontFamily: 'Montserrat-SemiBold',
    },
    quantityContainer: {
        backgroundColor: '#E7E7E7',
        borderRadius: 5,
        height: 28,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 10
    },
    count: {
        fontFamily: 'Montserrat-SemiBold',
        backgroundColor: '#fff',
        height: '90%',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1
    },
    operator: {
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
    }
})