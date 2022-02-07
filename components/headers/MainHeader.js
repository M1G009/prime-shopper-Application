import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageButton from '../UI/buttons/ImageButton'
import styles from './HeaderStyles'

const MainHeader = (props) => {
    return (
        <View style={styles.mContainer}>

            <ImageButton source={require('../../assets/images/menu.png')} onPress={() => props.navigation.toggleDrawer()} />

            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Image source={require('../../assets/images/PS-logo.png')} style={styles.logo} />
            </TouchableOpacity>

            <View style={styles.trailing}>

                <View style={{ marginRight: 25 }}>
                    <View style={styles.countContainer}><Text style={styles.count}>1</Text></View>
                    <ImageButton source={require('../../assets/images/notification.png')} />
                </View>

                <ImageButton source={require('../../assets/images/cart.png')} onPress={() => props.navigation.navigate('CartScreen')} />

            </View>

        </View>
    )
}

export default MainHeader
