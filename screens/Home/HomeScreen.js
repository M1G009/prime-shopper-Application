import React from 'react'
import { ScrollView, View, Text, Image, FlatList } from 'react-native'
import TopBrands from '../../components/brands/TopBrands'
import HomeProductCard from '../../components/cards/HomeProductCard'
import MainHeader from '../../components/headers/MainHeader'
import Categories from '../../components/Home/Categories'
import Slider from '../../components/Home/Slider'
import SearchInput from '../../components/UI/inputs/SearchInput'
import globalStyle from '../../constants/globalStyle'
import styles from './HomeStyles'
import Box from '../../components/UI/Box'

const HomeScreen = (props) => {

    const data = [
        { image: require('../../assets/images/product1.png'), name: 'Traditional Dress', discount: 10 },
        { image: require('../../assets/images/product2.png'), name: 'Traditional Shoose', discount: 20 },
        { image: require('../../assets/images/product3.png'), name: 'Traditional Sweter', discount: 25 },
        { image: require('../../assets/images/product4.png'), name: 'Traditional Dress', discount: 15 },
    ]

    const data2 = [
        { image: require('../../assets/images/person1.png'), name: 'Traditional Dress', discount: 10 },
        { image: require('../../assets/images/person5.png'), name: 'Traditional Shoose', discount: 20 },
        { image: require('../../assets/images/person6.png'), name: 'Traditional Sweter', discount: 25 },
        { image: require('../../assets/images/person7.png'), name: 'Traditional Dress', discount: 15 },
    ]

    const data3 = [
        { image: require('../../assets/images/person11.png'), name: 'Traditional Dress', discount: 10 },
        { image: require('../../assets/images/person9.png'), name: 'Traditional Shoose', discount: 20 },
        { image: require('../../assets/images/person10.png'), name: 'Traditional Sweter', discount: 25 },
        { image: require('../../assets/images/person12.png'), name: 'Traditional Dress', discount: 15 },
    ]

    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <ScrollView>

                <Categories navigation={props.navigation} />
                <Slider />
                <TopBrands navigation={props.navigation} />

                <Text style={globalStyle.textBold}>TOP BRANDS</Text>

                {/* 1st recoer */}
                <Image source={require('../../assets/images/top-brands.png')} style={styles.topBrandsImage} />

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>WOMEN DRESS</Text>

                <FlatList
                    data={data}
                    renderItem={({ item, index }) => <View style={{ ...styles.productContainer, marginLeft: index % 2 !== 0 ? 0 : 10 }}>
                        <HomeProductCard item={item} />
                    </View>}
                    keyExtractor={(item, i) => i}
                    numColumns={2}
                />

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>LAPTOPS</Text>

                <View style={styles.fourCardContainer}>
                    <Image source={require('../../assets/images/person1.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person2.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person3.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person4.png')} style={styles.fourCardImage} />
                </View>

                <Box height={20} />

                {/* 2nd recoer */}
                <Image source={require('../../assets/images/banner2.png')} style={styles.topBrandsImage} />

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

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>LAPTOPS</Text>

                <View style={styles.fourCardContainer}>
                    <Image source={require('../../assets/images/person8.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person9.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person10.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person5.png')} style={styles.fourCardImage} />
                </View>

                <Box height={20} />

                {/* 3rd Record */}
                <Image source={require('../../assets/images/banner3.png')} style={styles.topBrandsImage} />

                <View style={styles.adContainer}>
                    <Image source={require('../../assets/images/ad1.png')} style={styles.adImage} />
                    <Image source={require('../../assets/images/ad2.png')} style={styles.adImage} />
                </View>

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

                <Text style={globalStyle.textBold}>DEAL WITH BEST SELLING</Text>
                <Text style={{ ...globalStyle.textBold, marginTop: -5 }}>LAPTOPS</Text>

                <View style={styles.fourCardContainer}>
                    <Image source={require('../../assets/images/person6.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person13.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person14.png')} style={styles.fourCardImage} />
                    <Image source={require('../../assets/images/person5.png')} style={styles.fourCardImage} />
                </View>

                <Box height={20} />


            </ScrollView>

        </View>
    )
}

export default HomeScreen