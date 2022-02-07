import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyle from '../../constants/globalStyle'

const SettingCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
            <View style={styles.cardContainer}>
                <Text style={globalStyle.textRegular}>{props.label}</Text>
                <Image source={require('../../assets/images/chevron-right.png')} style={styles.img} />
            </View>
        </TouchableOpacity>
    )
}

export default SettingCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    img : {
        height: 14,
        width: 14,
        resizeMode: 'contain',
        opacity: 0.8
    }
})
