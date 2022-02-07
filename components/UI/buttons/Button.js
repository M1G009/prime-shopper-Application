import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity style={{...styles.button, ...props.containerStyle}} onPress={props.onPress ?  props.onPress : null}>
            {props.showLoader && <ActivityIndicator color='#fff' size="small" style={styles.loader} />}
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    label: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal: 10,
        marginBottom: 5
    },
    loader: {
        marginBottom: 3
    }
})
