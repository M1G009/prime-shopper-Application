import { StyleSheet } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import { screenWidth } from '../../constants/orientation'

const styles = StyleSheet.create({
    categoryContainer: {
        marginBottom: 15,
        marginHorizontal: 10,
        height: 110,
        alignItems: 'center',
        width: screenWidth / 3.7
    },
    categoryImage: {
        width: '100%',
        height: 80,
        borderRadius: 10
    },
    categoryText: {
        fontFamily: 'Montserrat-Regular',
        marginTop: 3
    },
    productContainer: {
        marginBottom: 15,
        flex: 1,
        marginHorizontal: 10,
        height: 300
    },
    productCardContainer: {
        marginBottom: 15,
        flex: 1,
        marginHorizontal: 15,
        overflow: 'hidden'
    },
    card: {
        ...globalStyle.totalContaier,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    mi: {
        height: 30,
        width: 80,
        resizeMode: 'contain'
    },
    arrow: {
        height: 12,
        width: 12,
        resizeMode: 'contain',
        marginTop: 5,
        marginLeft: 5
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10
    },
    imageAD: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20
    },
    socialImage: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginHorizontal: 12,
        marginVertical: 20
    }
})

export default styles

