import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import SettingCard from '../../components/cards/SettingCard'
import StatisticsCard from '../../components/cards/StatisticsCard'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import { linkColor, secondaryColor } from '../../constants/colors'
import globalStyle from '../../constants/globalStyle'

const FAQsScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <ScrollView>

                <View style={styles.headContainer}>
                    <Text style={globalStyle.textBold}>Frequently Asked Questions (FAQ)</Text>
                </View>

                <View style={{ padding: 20 }}>

                    <SettingCard label="Shipping FAQs" />
                    <SettingCard label="Cancellation FAQs" />
                    <SettingCard label="Payment FAQs" />
                    <SettingCard label="Returns FAQs" />
                    <SettingCard label="Prime Shopper Wallet " />
                    <SettingCard label=" Account & Shopping" />
                    <SettingCard label="Loyalty Rewards" />
                    <SettingCard label="Precious Jewellery" />
                    <SettingCard label="Silver Jewellery and Articles" />

                </View>

                <View style={styles.container} >
                    <Image source={require('../../assets/images/email.png')} style={styles.image} />
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Text style={styles.title}>Write to us </Text>
                        <Text style={globalStyle.textRegular}>Write to us at <Text style={{ color: linkColor }}>loremipsum@gmail.com</Text> </Text>
                    </View>
                </View>

                <View style={styles.container} >
                    <Image source={require('../../assets/images/phone.png')} style={styles.image} />
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Text style={styles.title}>Call us </Text>
                        <Text style={{ ...globalStyle.textRegular, color: linkColor }}>+91 98765 43210</Text>
                    </View>
                </View>

                <View style={{ ...styles.container, borderBottomWidth: 0 }} >
                    <Image source={require('../../assets/images/marker.png')} style={styles.image} />
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Text style={styles.title}>Reach Us </Text>
                        <Text style={globalStyle.textRegular}>AJIO c/o Reliance Retail Limited SS Plaza, 74/2 Outer Ring Road, BTM Layout, Bangalore-560068</Text>
                    </View>
                </View>

                <View style={{backgroundColor: '#fff', paddingVertical: 10}}>
                    <StatisticsCard />
                </View>

            </ScrollView>



        </View>
    )
}

export default FAQsScreen

const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 20,
        borderBottomColor: secondaryColor,
        borderBottomWidth: 1
    },
    image: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        marginTop: 5
    },
    title: {
        ...globalStyle.textSemiBold,
        marginBottom: 3
    }
})
