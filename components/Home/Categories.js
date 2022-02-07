import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { screenWidth } from '../../constants/orientation';

const Categories = (props) => {

    const data = [
        { image: require('../../assets/images/cate-img1.png'), name: 'Men' },
        { image: require('../../assets/images/cate-img1.png'), name: 'Whomen' },
        { image: require('../../assets/images/cate-img1.png'), name: 'Food & bev' },
        { image: require('../../assets/images/cate-img1.png'), name: 'Health & Wel..' },
        { image: require('../../assets/images/cate-img1.png'), name: 'Fragrance' },
        { image: require('../../assets/images/cate-img1.png'), name: 'Children' },
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('CategoriesScreen')}>
            <View >
                <Image source={item.image} style={styles.image} />
                <Text numberOfLines={1} style={styles.text} >{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, i) => i}
            horizontal={true}
            style={styles.container}
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 80
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 50
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: 5,
        alignSelf: 'center'
    },
    card: {
        width: screenWidth / 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
