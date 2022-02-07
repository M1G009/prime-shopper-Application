import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

const SearchInput = (props) => {

    return (
        <View style={{ ...styles.container, ...props.style }}>

            <Image source={props.source ? props.source : require('../../../assets/images/search.png')} style={styles.img} />
            <TextInput
                style={styles.input}
                placeholder={props.placeholder ? props.placeholder : 'Search Products..'}
            />
        </View >
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
        height: 34,
        paddingLeft: 40,
        fontFamily: 'Montserrat-Medium',
        fontSize: 12
    },
    img: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 10,
        marginTop: 10,
        left: 12
    },
})
