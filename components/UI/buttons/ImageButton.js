import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ImageButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
            <Image source={props.source} style={{...styles.img, ...props.style}} />
        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    img: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
})