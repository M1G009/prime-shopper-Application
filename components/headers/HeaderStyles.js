import { StyleSheet } from 'react-native'
import { screenWidth } from '../../constants/orientation'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    head: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        paddingRight: 30,
    },
    back: {
        height: 35,
        width: 32, 
        resizeMode: 'contain'
    },
    // main Header
    mContainer: {
        // backgroundColor: 'red',
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 20
    },
    logo: {
        height: 65,
        width: 65,
        resizeMode: 'contain',
        marginLeft: 20
    },
    trailing: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    countContainer: {
        backgroundColor: 'red',
        height: 20,
        width: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 10,
        marginLeft: 7,
        top: -8
    },
    count: {
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Montserrat-SemiBold'
    }
})

export default styles

