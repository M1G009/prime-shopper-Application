import { StyleSheet, Text, View } from 'react-native'
import { screenWidth } from '../../constants/orientation'

const styles = StyleSheet.create({
    topBrandsImage: {
        height: 180,
        width: screenWidth,
        resizeMode: 'stretch'
    },
    productContainer: {
        marginBottom: 15,
        flex: 1,
        marginHorizontal: 10,
        height: 300
    },
    fourCardContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around',
       height: 100,
       paddingHorizontal: 5
    },
    fourCardImage: {
        height: '100%',
        width: screenWidth / 5,
        resizeMode: 'cover'
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
    }
})

export default styles