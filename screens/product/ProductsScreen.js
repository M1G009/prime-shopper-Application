import React from 'react'
import { ScrollView, StyleSheet, FlatList, View, Image } from 'react-native'
import ProductCard from '../../components/cards/ProductCard'
import MainHeader from '../../components/headers/MainHeader'
import ImageButton from '../../components/UI/buttons/ImageButton'
import SearchInput from '../../components/UI/inputs/SearchInput'
import { collections } from '../../constants/data'
import globalStyle from '../../constants/globalStyle'
import { screenWidth } from '../../constants/orientation'
import styles from './ProductStyles'

const ProductsScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <ScrollView>

                <FlatList
                    data={collections}
                    renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                        <ProductCard navigation={props.navigation} item={item} />
                    </View>}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />

                <ImageButton source={require('../../assets/images/s1.png')} style={styles.image} />

                <FlatList
                    data={collections}
                    renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                        <ProductCard navigation={props.navigation} item={item} />
                    </View>}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />

                <View style={styles.adContainer}>
                    <Image source={require('../../assets/images/ad1.png')} style={styles.adImage} />
                    <Image source={require('../../assets/images/ad2.png')} style={styles.adImage} />
                </View>

                <FlatList
                    data={collections}
                    renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                        <ProductCard navigation={props.navigation} item={item} />
                    </View>}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />

            </ScrollView>

        </View>
    )
}

export default ProductsScreen