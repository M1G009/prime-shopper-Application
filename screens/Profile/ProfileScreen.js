import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainHeader from '../../components/headers/MainHeader'
import Box from '../../components/UI/Box'
import SearchInput from '../../components/UI/inputs/SearchInput'
import globalStyle from '../../constants/globalStyle'
import { screenWidth } from '../../constants/orientation'

const ProfileScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            {/* Profile Card */}

            <View style={styles.card}>
                <View style={{ alignItems: 'flex-end', marginTop: 20, marginRight: 20 }} >
                    <TouchableOpacity style={styles.editIconContainer} onPress={() => props.navigation.navigate('UpdateProfile')}>
                        <Image source={require('../../assets/images/edit.png')} style={styles.editIcon} />
                    </TouchableOpacity>
                </View>

                <Image source={require('../../assets/images/profile.png')} style={styles.profile} />
                <Text style={styles.name}>John Doe</Text>

            </View>

            <Box height={30} />

            <View style={{ padding: 20 }}>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>loremipsum@gmail.com</Text>

                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.value}>+91 9876543210</Text>

                <Text style={styles.label}>Shipping Address</Text>
                <Text style={styles.value}>Lorem Ipsum area, lorem ipsum street, lorem ipsum city, india</Text>

                <Text style={styles.label}>Billing Address</Text>
                <Text style={styles.value}>Lorem Ipsum area, lorem ipsum street, lorem ipsum city, india</Text>

                <Text style={styles.label}>Pincode</Text>
                <Text style={styles.value}>9654213</Text>

            </View>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#CEECF3',
        height: 100
    },
    editIconContainer: {
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 50
    },
    editIcon: {
        height: 12,
        width: 12,
        resizeMode: 'contain'
    },
    profile: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
        position: 'absolute',
        left: 20,
        bottom: -30
    },
    name: {
        marginTop: 15,
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 150
    },
    label: {
        fontFamily: 'Montserrat-Bold',
        marginBottom: 5
    },
    value: {
        backgroundColor: '#fff',
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})
