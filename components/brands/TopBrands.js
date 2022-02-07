import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { screenWidth } from '../../constants/orientation';
import BrandCard from './BrandCard';

const TopBrands = (props) => {
    const data = [
        { image: require('../../assets/images/product-photo.png'), name: 'Men' },
        { image: require('../../assets/images/product-photo.png'), name: 'Whomen' },
        { image: require('../../assets/images/product-photo.png'), name: 'Food & bev' },
        { image: require('../../assets/images/product-photo.png'), name: 'Health & Wel..' },
        { image: require('../../assets/images/product-photo.png'), name: 'Fragrance' },
        { image: require('../../assets/images/product-photo.png'), name: 'Children' },
    ]

    return (
        <View style={{backgroundColor: '#fff'}}>

            <Text style={styles.head}>Top Brands</Text>

            <FlatList
                data={data}
                renderItem={(({ item }) => <BrandCard navigation={props.navigation} item={item} />)}
                keyExtractor={(item, i) => i}
                horizontal={true}
                style={styles.container}
            />
        </View>
    )
}

export default TopBrands

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 230,
        marginVertical: 15,
        paddingLeft: 20
    },
    head: {
        fontSize: 18,
        fontFamily: 'Montserrat-Light',
        paddingTop: 10,
        marginLeft: 20
    }
})
