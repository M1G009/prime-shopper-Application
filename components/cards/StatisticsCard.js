import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const StatisticsCard = () => {
    return (
        <View style={styles.container}>
            
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/truck.png')} style={styles.img} />
                <Text style={styles.text}>30 Day</Text>
                <Text style={styles.text}>Returns*</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/handpicked.png')} style={styles.img} />
                <Text style={styles.text}>30 Day</Text>
                <Text style={styles.text}>Returns*</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/quality.png')} style={styles.img} />
                <Text style={styles.text}>30 Day</Text>
                <Text style={styles.text}>Returns*</Text>
            </View>
            
        </View>
    )
}

export default StatisticsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    img: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginBottom: 5
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        fontSize: 12,
        textAlign: 'center'
    }
})