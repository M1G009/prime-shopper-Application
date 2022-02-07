import React from 'react'
import { Image, ScrollView, FlatList, Text, View } from 'react-native'
import ProductCard from '../../components/cards/ProductCard'
import MainHeader from '../../components/headers/MainHeader'
import Slider from '../../components/Home/Slider'
import Box from '../../components/UI/Box'
import ImageButton from '../../components/UI/buttons/ImageButton'
import SearchInput from '../../components/UI/inputs/SearchInput'
import { collections } from '../../constants/data'
import globalStyle from '../../constants/globalStyle'
import styles from './CategoryStyles'


const SubCategoriesScreen = (props) => {
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <ScrollView>

                <View style={styles.card}>

                    <Image source={require('../../assets/images/mi.png')} style={styles.mi} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={globalStyle.textSemiBold}>Menu</Text>
                        <Image source={require('../../assets/images/chevron-right.png')} style={styles.arrow} />
                    </View>

                </View>

                <Slider />

                <View style={{ paddingHorizontal: 20 }}>

                    <ImageButton source={require('../../assets/images/s1.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s1.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s2.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s3.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s4.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s5.png')} style={styles.image} />
                    <ImageButton source={require('../../assets/images/s6.png')} style={styles.image} />

                </View>

                <Image source={require('../../assets/images/s7.png')} style={{ ...styles.imageAD }} />

                <FlatList
                    data={collections}
                    renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                        <ProductCard navigation={props.navigation} item={item} />
                    </View>}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />

                <View style={{alignItems: 'center'}}>
                    
                    <Text style={{ ...globalStyle.textBold, fontSize: 25, marginBottom: 0 }}>Share</Text>
                    <Text style={globalStyle.textRegular}>Share this page with ypur friend.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <ImageButton source={require('../../assets/images/Facebook.png')} style={styles.socialImage} />
                        <ImageButton source={require('../../assets/images/twitter.png')} style={styles.socialImage} />
                        <ImageButton source={require('../../assets/images/pinterest.png')} style={styles.socialImage} />
                    </View>

                </View>

            </ScrollView>



        </View>
    )
}

export default SubCategoriesScreen