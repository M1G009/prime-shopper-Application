import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsHeader from '../../../components/headers/DetailsHeader'
import PanelCard from '../../../components/order/PanelCard'
import globalStyle from '../../../constants/globalStyle'
import styles from './styles'

const TrackOrderScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <DetailsHeader title="Track Order Screen" onPress={() => props.navigation.goBack()} />

            <ScrollView style={{backgroundColor: '#fff'}}>
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
                        titleDate="Expected by Wed, 27th Oct, 21"
                        description="Item Will be shipped"
                        icon={require('../../../assets/images/clock.png')}
                    />

                    <PanelCard
                        title="Out for Delivery"
                        mode="light"
                        description="Dispatched from lorem City at 2:00 AM 02/09/2021
    Arrived in lorem City at 2:30 AM 02/09/2021
    Dispatched from lorem City at 3:00 AM 03/09/2021
    Arrived in lorem City at 3:30 AM 03/09/2021
    Dispatched from lorem City at 4:00 AM 04/09/2021
    Arrived in lorem City at 4: 30 AM 04/09/2021
    Dispatched from lorem City at 5:00 AM 05/09/2021
    Arrived in lorem City at 5:30 AM 05/09/2021
    Dispatched from lorem City at 6:00 AM 06/09/2021
    Arrived in lorem City at 6: 30 AM 06/09/2021"
                        icon={require('../../../assets/images/delivery-truck.png')}
                    />

                    <PanelCard
                        title="Shipped"
                        mode="light"
                        titleDate="Expected by Wed, 27th Oct, 21"
                        icon={require('../../../assets/images/check.png')}
                        isEnd={true}
                    />

                </View>
            </ScrollView>

        </View>
    )
}

export default TrackOrderScreen
