import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { secondaryColor } from '../../constants/colors'
import globalStyle from '../../constants/globalStyle'
import Box from '../UI/Box'
import ImageButton from '../UI/buttons/ImageButton'
import SearchInput from '../UI/inputs/SearchInput'

const DrawerItem = ({ label, isActive, onPress = null }) => {
    return (

        isActive
            ? <TouchableOpacity onPress={onPress}>
                <View style={{ ...styles.itemContainer, backgroundColor: '#000', marginHorizontal: -20, paddingHorizontal: 20 }}>
                    <Text style={{ ...globalStyle.textRegular, color: '#fff' }}>{label}</Text>
                    <ImageButton
                        source={require('../../assets/images/chevron-right-gray.png')}
                        style={styles.arrow}
                        onPress={onPress}
                    />
                </View>
            </TouchableOpacity>
            : <TouchableOpacity onPress={onPress}>
                <View style={styles.itemContainer}>
                    <Text style={globalStyle.textRegular}>{label}</Text>
                    <ImageButton
                        source={require('../../assets/images/chevron-right.png')}
                        style={styles.arrow}
                        onPress={onPress}
                    />
                </View>
            </TouchableOpacity>

    )
}

const CustomDrawer = (props) => {

    return (
        <View style={styles.container}>

            <View style={styles.itemContainer}>

                <SearchInput placeholder="Search zipcode..." style={{ marginBottom: 0 }} source={require('../../assets/images/location.png')} />

                {/* <ImageButton source={require('../../assets/images/back.png')} onPress={() => props.navigation.toggleDrawer()} style={styles.back} /> */}
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                <View style={{ ...styles.itemContainer, paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/menu-user.png')} style={styles.user} />
                        <Box width={20} />
                        <Text style={globalStyle.textSemiBold}>John Doe</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <DrawerItem label="Order History" isActive={props.state.index == 7} onPress={() => props.navigation.navigate('MyOrders')} />
            <DrawerItem label="My Wishlists" />
            <DrawerItem label="About Us" isActive={props.state.index == 1} onPress={() => props.navigation.navigate('AboutUs')} />
            <DrawerItem label="Contact Us" isActive={props.state.index == 2} onPress={() => props.navigation.navigate('ContactUs')} />
            <DrawerItem label="Terms of Use" isActive={props.state.index == 3} onPress={() => props.navigation.navigate('TermsAndConditions')} />
            <DrawerItem label="Privacy Policy" />
            <DrawerItem label="Refund Policy" isActive={props.state.index == 4} onPress={() => props.navigation.navigate('RefundPolicy')} />
            <DrawerItem label="FAQs" isActive={props.state.index == 5} onPress={() => props.navigation.navigate('FAQs')} />
            <DrawerItem label="Settings" isActive={props.state.index == 6} onPress={() => props.navigation.navigate('Settings')} />

        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    back: {
        height: 35,
        width: 35
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    user: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        backgroundColor: secondaryColor,
        borderRadius: 50
    },
    arrow: {
        opacity: 0.2,
        height: 15,
        width: 15
    }
})
