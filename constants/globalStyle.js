import { bgTheme, placeholderTextColor, secondaryColor, textSuccess } from "./colors";
import { screenHeight } from "./orientation";

const { StyleSheet } = require("react-native");


const globalStyle = StyleSheet.create({
    textBold: {
        fontFamily: 'Montserrat-Bold',
        alignSelf: 'center',
        fontSize: 16,
        marginVertical: 10
    },
    textLeftBold: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginVertical: 10,
        color: '#000'
    },
    textSemiBold: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#000'
    },
    textSemiBold12: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#000',
        marginLeft: 10
    },
    textMedium: {
        fontFamily: 'Montserrat-Medium',
        color: '#000'
    },
    textRegular: {
        fontFamily: 'Montserrat-Regular',
        color: '#000'
    },
    textRegular12: {
        fontFamily: 'Montserrat-Regular',
        color: '#000',
        fontSize: 12
    },
    small: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: bgTheme
    },
    star: {
        color: 'red',
        fontFamily: 'Montserrat-SemiBold'
    },
    Ulink: {
        fontFamily: 'Montserrat-SemiBold',
        textDecorationLine: 'underline'
    },
    logo: {
        height: 70,
        resizeMode: 'contain',
        marginBottom: 35,
        marginTop: 25
    },

    columnCenterX: {
        alignItems: 'center',
    },
    head: {
        fontFamily: 'Montserrat-SemiBold'
    },
    hr: {
        width: 70,
        alignSelf: 'center',
        height: 1.5,
        backgroundColor: '#000',
        marginTop: 20
    },
    contentContainer: {
        justifyContent: 'space-between',
        padding: 25,
        height: screenHeight - 100
    },
    totalContaier: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
    },
    totalLabel: {
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
    },
    discount: {
        color: '#898989',
        fontSize: 11,
        textDecorationLine: 'line-through',
        fontFamily: 'Montserrat-Regular'
    },
    price: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    },
    days: {
        color: textSuccess,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
})

export default globalStyle;