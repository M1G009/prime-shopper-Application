import { StyleSheet } from 'react-native'
import { secondaryColor } from '../../constants/colors'
import { screenWidth } from '../../constants/orientation'

const styles = StyleSheet.create({
    productCardContainer: {
        marginBottom: 15,
        flex: 1,
        marginHorizontal: 15,
        overflow: 'hidden'
    },
    image: {
        width: '90%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    adContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,

    },
    adImage: {
        height: screenWidth / 2.5,
        width: screenWidth / 2.4,
        resizeMode: 'cover',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    round: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        borderColor: secondaryColor,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 50,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    collapseHeader1: {
        borderTopWidth: 1,
        borderTopColor: secondaryColor,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    downArrow: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    text1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#7a7c7c', 
        borderBottomColor: secondaryColor,
        borderBottomWidth: 2,
        paddingBottom: 15,
        flex: 1
    }
})

export default styles
