import { StyleSheet } from 'react-native'
import { placeholderTextColor } from '../../../constants/colors'

const styles = StyleSheet.create({
    coupenContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 5
    },
    headConainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12
    },
    head: {
        fontSize: 18,
        color: placeholderTextColor,
        fontFamily: 'Montserrat-SemiBold'
    },
    table: {
        borderColor: '#C4C4C4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 5,
        backgroundColor: '#fff'
    }
})

export default styles