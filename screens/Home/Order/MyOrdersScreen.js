import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import OrderCard from '../../../components/order/OrderCard'
import Box from '../../../components/UI/Box'
import Button from '../../../components/UI/buttons/Button'
import ImageButton from '../../../components/UI/buttons/ImageButton'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import globalStyle from '../../../constants/globalStyle'
import { screenWidth } from '../../../constants/orientation'

const MyOrdersScreen = (props) => {
    return (
        <View style={globalStyle.container} >
            <DetailsHeader title="My Orders" navigation={props.navigation} onPress={() => props.navigation.navigate('Home')} />

            <View style={styles.searchContainer}>
                <SearchInput style={styles.searchInput} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ImageButton source={require('../../../assets/images/filter.png')} style={styles.filterIcon} />
                    <Text style={globalStyle.textSemiBold}>Filters</Text>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-between' }}>

                <ScrollView style={{ padding: 20 }}>

                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        renderItem={({ item, index }) =>  <OrderCard navigation={props.navigation} />}
                        keyExtractor={(item, i) => i}
                    />

                    <Box height={20} />

                </ScrollView>

                <View style={globalStyle.totalContaier}>
                    <Text style={globalStyle.textSemiBold}>
                        <Text style={globalStyle.totalLabel}>Total : </Text>
                        $298.99
                    </Text>
                    <View style={{ width: 170 }}>
                        <Button label="Place Order" onPress={() => props.navigation.navigate('OrderSummary')} containerStyle={{ paddingVertical: 7 }} />
                    </View>
                </View>


            </View>

        </View>
    )
}

export default MyOrdersScreen

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10
    },
    searchInput: {
        width: screenWidth / 1.7,
        marginBottom: 0
    },
    filterIcon: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginRight: 10
    }
})
