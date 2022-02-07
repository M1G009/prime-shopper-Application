import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import Box from '../UI/Box'

const PanelCard = (props) => {
    return (
        <View>

            <View style={styles.row}>

                <View style={{...styles.iconContainer, backgroundColor: props.mode && props.mode == 'dark' ? '#000': '#fff'}}>
                    <Image source={props.icon} style={styles.icon} />
                </View>

                <Box width={10} />
                <Text style={globalStyle.textSemiBold}>{props.title}</Text>
                <Box width={10} />

                <Text style={{...globalStyle.textRegular, fontSize: 12}}>{props.titleDate ? props.titleDate : ''}</Text>

            </View>

            <Text style={{...styles.description, borderLeftWidth: props.isEnd ? 0 : 2}}>{props.description}</Text>
            
        </View>
    )
}

export default PanelCard

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        height: 38,
        width: 38,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    description: {
        marginLeft: 18,
        paddingLeft: 30,
        borderLeftColor: '#000',
        borderLeftWidth: 2,
        marginVertical: 5,
        color: '#898989',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        paddingVertical: 5
    }
})
