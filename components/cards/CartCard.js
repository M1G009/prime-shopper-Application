import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ImageButton from '../UI/buttons/ImageButton'
import SelectDropdown from 'react-native-select-dropdown'
import { bgTheme } from '../../constants/colors'
import globalStyle from '../../constants/globalStyle'
import Box from '../UI/Box'

const CartCard = () => {

    const countries = ["S", "M", "L", "XL", "XXL"]

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/images/product-photo.png')} style={styles.image} />

            <View style={styles.contents}>

                <Text numberOfLines={1} style={styles.name}>Traditional Dress </Text>
                <Text style={styles.price}>
                    $99.99 <Box width={5} />
                    <Text style={globalStyle.discount}>$1000.00</Text>
                </Text>
                <Text style={styles.small}>
                    Delivered By
                    <Text style={styles.days}> 2 - 7 Days</Text>
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <View style={styles.dropdownContainer}>
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonStyle={{
                                backgroundColor: bgTheme,
                                height: 25,
                                width: 55,
                                borderRadius: 5,
                            }}
                            buttonTextStyle={{
                                fontSize: 12,
                            }}
                            defaultButtonText="Size"
                            dropdownOverlayColor="transparent"
                            dropdownStyle={{ marginTop: -20 }}
                        />
                        <Image source={require('../../assets/images/chevron-down.png')} style={styles.icon} />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <SelectDropdown
                            data={[1, 2, 3, 4, 5]}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonStyle={{
                                backgroundColor: bgTheme,
                                height: 25,
                                width: 55,
                                borderRadius: 5,
                            }}
                            buttonTextStyle={{
                                fontSize: 12,
                            }}
                            defaultButtonText="Qty"
                            dropdownOverlayColor="transparent"
                            dropdownStyle={{ marginTop: -20 }}
                        />
                        <Image source={require('../../assets/images/chevron-down.png')} style={styles.icon} />
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

export default CartCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1,
        padding: 10,
        marginBottom: 5,
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
    price: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    },
    small: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    days: {
        color: '#19B500',
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
    laterText: {
        fontFamily: 'Montserrat-SemiBold',
    },
    dropdownContainer: {
        backgroundColor: bgTheme,
        borderRadius: 5,
        width: 65,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    icon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10
    }
})
