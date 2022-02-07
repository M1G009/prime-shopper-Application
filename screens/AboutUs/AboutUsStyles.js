import { StyleSheet } from 'react-native'
import { bgTheme } from '../../constants/colors'

const styles = StyleSheet.create({
    card: {
        backgroundColor: bgTheme,
        width: '100%',
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 13,
        paddingVertical: 30
    },
    cardText: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        fontSize: 12
    },
    banner: {
        height: 150,
        width: '100%',
        resizeMode: 'stretch'
    }
})

export default styles
