import React from 'react'
import { View } from 'react-native'

const Box = (props) => {
    return (
        <View style={{
            height: props.height ? props.height : 10,
            width: props.width ? props.width : 0
        }}></View>
    )
}

export default Box