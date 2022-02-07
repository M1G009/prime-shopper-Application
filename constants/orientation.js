const { Dimensions } = require("react-native");

module.exports  = {

    windowWidth : Dimensions.get('window').width,
    windowHeight : Dimensions.get('window').height,
    screenWidth : Dimensions.get('screen').width,
    screenHeight : Dimensions.get('screen').height,

}