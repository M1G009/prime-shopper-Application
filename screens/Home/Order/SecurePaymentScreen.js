import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import OrderTabs from '../../../components/order/OrderTabs'
import Box from '../../../components/UI/Box'
import Button from '../../../components/UI/buttons/Button'
import ImageButton from '../../../components/UI/buttons/ImageButton'
import globalStyle from '../../../constants/globalStyle'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { textSuccess } from '../../../constants/colors'

const SecurePaymentScreen = (props) => {

    const [current, setCurrent] = useState("upi");

    return (
        <View style={globalStyle.container}>

            <DetailsHeader title="Secure Payment" onPress={() => props.navigation.goBack()} />

            <OrderTabs active={2} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <ScrollView>

                    <View style={{ padding: 20 }}>

                        <Text style={globalStyle.textSemiBold}>All Options</Text>
                        <Box />

                        <RadioButtonGroup
                            selected={current}
                            onSelected={(value) => setCurrent(value)}
                            radioBackground="#000"
                        >
                            <View style={styles.radioCard}>

                                <RadioButtonItem value="upi" label={<Text style={globalStyle.textSemiBold12}>UPI</Text>} />

                                <View style={{ flexDirection: 'row' }}>
                                    <ImageButton source={require('../../../assets/images/pay.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/google-pay.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/bhim-upi.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/paytm.png')} />
                                </View>
                            </View>


                            <View style={styles.radioCard}>
                                <RadioButtonItem value="wallets" label={<Text style={globalStyle.textSemiBold12}>Wallets</Text>} />
                                <View style={{ flexDirection: 'row' }}>
                                    <ImageButton source={require('../../../assets/images/pay.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/google-pay.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/bhim-upi.png')} /><Box width={5} />
                                    <ImageButton source={require('../../../assets/images/paytm.png')} />
                                </View>
                            </View>

                            <View style={styles.radioCard}>
                                <RadioButtonItem value="cards" label={<Text style={globalStyle.textSemiBold12}>Credit / Debit / ATM Card</Text>} />
                            </View>

                            <View style={styles.radioCard}>
                                <RadioButtonItem value="cards" label={<Text style={globalStyle.textSemiBold12}>Net Banking</Text>} />
                            </View>

                            <View style={styles.radioCard}>
                                <RadioButtonItem value="cards" label={<Text style={globalStyle.textSemiBold12}>Cash on Delivery</Text>} />
                            </View>

                        </RadioButtonGroup>

                    </View>
                    
                    <View style={{...globalStyle.totalContaier, paddingVertical: 10, marginTop: 0}}>
                        <Text style={globalStyle.totalLabel}>Price Details</Text>
                    </View>

                    <View style={globalStyle.table}>

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

                    <View style={{ ...globalStyle.totalContaier, paddingVertical: 10}}>
                        <Text style={globalStyle.textSemiBold}>Total Amount</Text>
                        <Text style={globalStyle.textSemiBold}>$298.99</Text>
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

export default SecurePaymentScreen

const styles = StyleSheet.create({
    radioCard: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        marginBottom: 10
    }
})
