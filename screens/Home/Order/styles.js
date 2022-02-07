import { StyleSheet } from 'react-native'
import { placeholderTextColor } from '../../../constants/colors'


const styles = StyleSheet.create({
    idContainer: {
        textAlign: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginVertical: 5,
        fontFamily: 'Montserrat-Regular'
    },
    detailsCardcontainer: {
        flexDirection: 'row',
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 1,
        alignSelf: 'center',
        marginVertical: 10
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 10
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    addressCard: {
        backgroundColor: '#fff',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    addressText: {
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        fontSize: 12.5
    },
    addressRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 10
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopColor: placeholderTextColor,
        borderTopWidth: 1
    }
})

export default styles

