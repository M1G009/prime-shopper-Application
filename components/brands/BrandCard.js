import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { bgTheme } from '../../constants/colors';
import { screenWidth } from '../../constants/orientation';

const BrandCard = ({ item, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SubCategories')}>
        <View style={styles.card}>

            <Image source={item.image} style={styles.image} />

            <View style={styles.bottomView}>
                <Text style={styles.head}>Lets Save</Text>
                <Text style={styles.description}>Upto 20% Off</Text>
            </View>


        </View>
    </TouchableOpacity>
);

export default BrandCard

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',

    },
    card: {
        width: screenWidth / 2.7,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: bgTheme
    },
    bottomView: {
        backgroundColor: '#000',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        bottom: 0,
    },
    head: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold'
    },
    description: {
        color: '#fff',
        fontFamily: 'Montserrat-Medium'
    }
})
