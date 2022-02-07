import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import OrderSummaryCard from '../../../components/order/OrderSummaryCard'
import OrderTabs from '../../../components/order/OrderTabs'
import Box from '../../../components/UI/Box'
import Button from '../../../components/UI/buttons/Button'
import { linkColor } from '../../../constants/colors'
import globalStyle from '../../../constants/globalStyle'
import styles from './styles'

const OrderSummaryScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <DetailsHeader title="Order Summary" onPress={() => props.navigation.goBack()} />

            <OrderTabs active={1} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <ScrollView>

                    <View style={styles.addressCard}>

                        <Text style={globalStyle.textSemiBold}>John Doe</Text>
                        <Text style={styles.addressText}>Lorem Ipsum is simply, dummy text of, the printing and typesetting industry. Lorem Ipsum has been the Gujarat - 380009</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <Text style={styles.addressText}><Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Phone Number: </Text> +91 9876543210</Text>
                            <Text style={{ ...styles.addressText, color: linkColor }}>Change Number</Text>
                        </View>

                        <Box />

                        <Button label="Change or Add Address" />

                    </View>

                    <View style={{paddingHorizontal: 15}}>
                        <OrderSummaryCard />
                        <OrderSummaryCard />
                        <OrderSummaryCard />
                        <OrderSummaryCard />
                    </View>


                </ScrollView>

                <View style={globalStyle.totalContaier}>
                    <Text style={globalStyle.textSemiBold}>
                        <Text style={globalStyle.totalLabel}>Total : </Text>
                        $298.99
                    </Text>
                    <View style={{ width: 170 }}>
                        <Button label="Place Order" onPress={() => props.navigation.navigate('SecurePayment')} containerStyle={{ paddingVertical: 7 }} />
                    </View>
                </View>

            </View>

        </View>
    )
}

export default OrderSummaryScreen