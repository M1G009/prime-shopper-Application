import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import PanelCard from '../../../components/order/PanelCard'
import Box from '../../../components/UI/Box'
import Button from '../../../components/UI/buttons/Button'
import { linkColor, textSuccess } from '../../../constants/colors'
import globalStyle from '../../../constants/globalStyle'
import styles from './styles'

const OrderDetailsScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <DetailsHeader title="Order Details" onPress={() => props.navigation.goBack()} />

            <TouchableOpacity onPress={() => props.navigation.navigate('TrackOrderScreen')}>
                <Text style={styles.idContainer}>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Order ID : </Text>
                    <Text> 256453264353512312 </Text>
                </Text>
            </TouchableOpacity>

            <ScrollView>

                <View style={styles.detailsCardcontainer}>
                    <Image source={require('../../../assets/images/product-photo.png')} style={styles.image} />
                    <View style={{ flex: 1, paddingHorizontal: 15 }}>
                        <Text numberOfLines={1} style={globalStyle.textSemiBold}>Traditional Dress</Text>
                        <Text style={globalStyle.textRegular}>
                            $99.99
                            <Text style={globalStyle.discount}>  $1000.00</Text>
                        </Text>
                        <Box height={20} />
                        <Text style={{ ...globalStyle.small, color: '#898989' }}>
                            Seller: Lorem Seller
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>

                    <PanelCard
                        title="Ordered"
                        titleDate="Wed, 27th Oct, 21"
                        mode="dark"
                        description="Your order has been placed."
                        icon={require('../../../assets/images/cart-white.png')}
                    />

                    <PanelCard
                        title="Shipped"
                        mode="dark"
                        description="Expected by Wed, 27th Oct, 21"
                        icon={require('../../../assets/images/clock.png')}
                    />

                    <PanelCard
                        title="Out for Delivery"
                        mode="light"
                        description=""
                        icon={require('../../../assets/images/delivery-truck.png')}
                    />

                    <PanelCard
                        title="Shipped"
                        mode="light"
                        description="Expected by Wed, 27th Oct, 21"
                        icon={require('../../../assets/images/check.png')}
                        isEnd={true}
                    />

                </View>

                <View style={{ paddingHorizontal: 20 }}>

                    <Button label="Cancel Order" containerStyle={{ marginVertical: 20 }} />

                    <Text style={{ ...globalStyle.textSemiBold, fontSize: 18 }}>Shopping Details</Text>

                </View>

                <View style={styles.addressCard}>

                    <Text style={globalStyle.textSemiBold}>John Doe</Text>
                    <Text style={styles.addressText}>Lorem Ipsum is simply, dummy text of, the printing and typesetting industry. Lorem Ipsum has been the Gujarat - 380009</Text>

                    <View style={styles.addressRow}>
                        <Text style={styles.addressText}><Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Phone Number: </Text> +91 9876543210</Text>
                        <Text style={{ ...styles.addressText, color: linkColor }}>Change Number</Text>
                    </View>

                    <Box />

                    <Button label="Change or Add Address" />

                </View>

                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={{ ...globalStyle.textSemiBold, fontSize: 18 }}>Price Details</Text>
                </View>

                <View style={{ ...globalStyle.table, borderTopWidth: 0 }}>

                    <View style={{ ...globalStyle.totalContaier, paddingVertical: 5, marginTop: 0 }}>
                        <Text style={globalStyle.textRegular}>Price (3 Items)</Text>
                        <Text style={globalStyle.textRegular}>$298.99</Text>
                    </View>

                    <View style={{ ...globalStyle.totalContaier, paddingVertical: 5, marginTop: 0 }}>
                        <Text style={globalStyle.textRegular}>Discount</Text>
                        <Text style={globalStyle.textRegular}>-$3000</Text>
                    </View>

                    <View style={{ ...globalStyle.totalContaier, paddingVertical: 5, marginTop: 0 }}>
                        <Text style={globalStyle.textRegular}>Apply Coupen</Text>
                        <Text style={{ ...globalStyle.textRegular, color: textSuccess }}>Apply Coupen</Text>
                    </View>

                    <View style={{ ...globalStyle.totalContaier, paddingVertical: 5, marginTop: 0 }}>
                        <Text style={globalStyle.textRegular}>Delivery Charges</Text>
                        <Text style={{ ...globalStyle.textRegular, color: textSuccess }}>Free</Text>
                    </View>

                </View>

                <View style={{ ...globalStyle.totalContaier, paddingVertical: 10 }}>
                    <Text style={globalStyle.textSemiBold}>Total Amount</Text>
                    <Text style={globalStyle.textSemiBold}>$298.99</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={globalStyle.textSemiBold}>Cash On Delivery: $298.99</Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default OrderDetailsScreen

