import React from 'react'
import { Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import MainHeader from '../../components/headers/MainHeader'
import globalStyle from '../../constants/globalStyle'
import SearchInput from '../../components/UI/inputs/SearchInput'
import Slider from '../../components/Home/Slider'
import styles from './CategoryStyles'
import TopBrands from '../../components/brands/TopBrands'
import Box from '../../components/UI/Box'
import HomeProductCard from '../../components/cards/HomeProductCard'

const CategoriesScreen = (props) => {

    const categories = [
        { image: require('../../assets/images/category1.png'), name: 'Men' },
        { image: require('../../assets/images/category2.png'), name: 'Woman' },
        { image: require('../../assets/images/category3.png'), name: 'Foods & Bev' },
        { image: require('../../assets/images/category4.png'), name: 'Health & welth ' },
        { image: require('../../assets/images/category5.png'), name: 'Fragrance' },
        { image: require('../../assets/images/category1.png'), name: 'Men' },
        { image: require('../../assets/images/category2.png'), name: 'Woman' },
        { image: require('../../assets/images/category3.png'), name: 'Foods & Bev' },
        { image: require('../../assets/images/category4.png'), name: 'Health & welth ' },
    ]

    const data2 = [
        { image: require('../../assets/images/person1.png'), name: 'Traditional Dress', discount: 10 },
        { image: require('../../assets/images/person5.png'), name: 'Traditional Shoose', discount: 20 },
        { image: require('../../assets/images/person6.png'), name: 'Traditional Sweter', discount: 25 },
        { image: require('../../assets/images/person7.png'), name: 'Traditional Dress', discount: 15 },
    ]

    const data3 = [
        { image: require('../../assets/images/person1.png'), name: 'Traditional Dress', discount: 10 },
        { image: require('../../assets/images/person5.png'), name: 'Traditional Shoose', discount: 20 },
    ]

    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />
            <ScrollView>

                <Slider />

                <View style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}>
                    <Text style={globalStyle.textBold}>CATEGORIES TO EXPLORE</Text>

                    <FlatList
                        data={categories}
                        renderItem={({ item, index }) => <TouchableOpacity onPress={() => props.navigation.navigate('ProductsScreen')} style={styles.categoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Image source={item.image} style={styles.categoryImage} />
                                <Text style={styles.categoryText} numberOfLines={1}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>}
                        keyExtractor={(item, i) => i}
                        numColumns={3}
                    />
                </View>

                <Box />

                <TopBrands navigation={props.navigation} />

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>WOMEN DRESS</Text>

                <FlatList
                    data={data2}
                    renderItem={({ item, index }) => <View style={{ ...styles.productContainer, marginLeft: index % 2 !== 0 ? 0 : 10 }}>
                        <HomeProductCard item={item} />
                    </View>}
                    keyExtractor={(item, i) => i}
                    numColumns={2}
                />

                <TopBrands navigation={props.navigation} />

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>WOMEN DRESS</Text>

                <FlatList
                    data={data3}
                    renderItem={({ item, index }) => <View style={{ ...styles.productContainer, marginLeft: index % 2 !== 0 ? 0 : 10 }}>
                        <HomeProductCard item={item} />
                    </View>}
                    keyExtractor={(item, i) => i}
                    numColumns={2}
                />

                <TopBrands navigation={props.navigation} />

            </ScrollView>

        </View>
    )
}

export default CategoriesScreen