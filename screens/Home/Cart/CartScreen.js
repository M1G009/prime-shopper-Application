import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import CartCard from '../../../components/cards/CartCard'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import Box from '../../../components/UI/Box'
import Button from '../../../components/UI/buttons/Button'
import { textSuccess } from '../../../constants/colors'
import globalStyle from '../../../constants/globalStyle'
import styles from './CartStyles'

const CartScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <DetailsHeader title="My Cart" onPress={() => props.navigation.goBack()} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <ScrollView>

                    <View style={{ paddingHorizontal: 20 }}>
                        <FlatList
                            data={[1, 2, 3]}
                            renderItem={({ item, index }) => <CartCard />}
                            keyExtractor={(item, i) => i}
                            numColumns={1}
                        />
                    </View>

                    <View style={styles.coupenContainer}>
                        <Text style={globalStyle.textSemiBold}>Apply Coupen</Text>
                        <Text style={{ ...globalStyle.textSemiBold, color: textSuccess }}>Select</Text>
                    </View>

                    <Box />

                    <View style={styles.headConainer}>
                        <Text style={styles.head}>Price Details</Text>
                    </View>
                    
                    <View style={styles.table}>

                        <View style={{ ...styles.coupenContainer, paddingVertical: 5, marginTop: 0 }}>
                            <Text style={globalStyle.textRegular}>Price (3 Items)</Text>
                            <Text style={globalStyle.textRegular}>$298.99</Text>
                        </View>

                        <View style={{ ...styles.coupenContainer, paddingVertical: 5, marginTop: 0 }}>
                            <Text style={globalStyle.textRegular}>Discount</Text>
                            <Text style={globalStyle.textRegular}>-$3000</Text>
                        </View>

                        <View style={{ ...styles.coupenContainer, paddingVertical: 5, marginTop: 0 }}>
                            <Text style={globalStyle.textRegular}>Apply Coupen</Text>
                            <Text style={{ ...globalStyle.textRegular, color: textSuccess }}>Apply Coupen</Text>
                        </View>

                        <View style={{ ...styles.coupenContainer, paddingVertical: 5, marginTop: 0 }}>
                            <Text style={globalStyle.textRegular}>Delivery Charges</Text>
                            <Text style={{ ...globalStyle.textRegular, color: textSuccess }}>Free</Text>
                        </View>

                    </View>

                    <View style={styles.headConainer}>
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
                        <Button label="Confirm Order" onPress={() => props.navigation.navigate('OrderSummary')} containerStyle={{ paddingVertical: 7 }} />
                    </View>
                </View>

            </View>

        </View>
    )
}

export default CartScreen