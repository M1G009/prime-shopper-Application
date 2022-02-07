import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './HeaderStyles'

const DetailsHeader = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
                <Image source={require('../../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.head}>{props.title ? props.title : ''}</Text>
        </View>
    )
}

export default DetailsHeader

