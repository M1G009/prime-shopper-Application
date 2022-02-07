import { StyleSheet } from 'react-native'
import { screenWidth } from '../../constants/orientation'

const styles = StyleSheet.create({
    forgotPasswordLink : {
        alignSelf: 'center',
        marginVertical: 30,
    },
    policyContainer: {
        flexDirection: 'row', 
        marginTop: -15,
        marginBottom: 20
    },
    policyText: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular'
    },
    chk: {
        borderWidth: 1,
        marginTop: 3,
        marginRight: 10
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        width: screenWidth + 15,
        marginTop: 5
    }
})

export default styles

