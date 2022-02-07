import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { secondaryColor } from '../../constants/colors'
import globalStyle from '../../constants/globalStyle'

const OrderTabs = (props) => {

    const getIcon = (index) => {
        if (props.active == index) {
            return (
                <View style={{ ...styles.round, backgroundColor: '#000' }} >
                    <Text style={styles.count}>{index + 1}</Text>
                </View>
            )
        } else if (props.active < index) {
            return <View style={styles.round} >
                <Text style={styles.countBlack}>{index + 1}</Text>
            </View>
        } else {
            return <View style={styles.round} >
                <Image source={require('../../assets/images/check.png')} style={styles.image} />
            </View>
        }
    }

    return (
        <View style={styles.container} >

            <View style={styles.iconsContainer}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {getIcon(0)}
                    <View style={styles.hr}></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {getIcon(1)}
                    <View style={styles.hr}></View>
                </View>

                {getIcon(2)}

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={globalStyle.textRegular12}> Address</Text>
                <Text style={{ ...globalStyle.textRegular12, marginHorizontal: 50 }}>Order Summary</Text>
                <Text style={globalStyle.textRegular12}>Payment</Text>
            </View>

        </View>
    )
}

export default OrderTabs

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 80,
        paddingHorizontal: 25,
    },
    round: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    image: {
        height: 15,
        width: 15,
        resizeMode: 'contain'
    },
    hr: {
        height: 2,
        width: 75,
        backgroundColor: secondaryColor,
        marginHorizontal: 10
    },
    iconsContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
    count: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff'
    },
    countBlack: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000'
    }
})