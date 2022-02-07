import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { bgTheme } from '../../constants/colors';
import { screenWidth } from '../../constants/orientation';
import ImageButton from '../UI/buttons/ImageButton';

const ProductSlider = () => {

    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplayDelay={2}
                index={3}
                showPagination
                data={[1,2,3,4]}
                renderItem={({ item }) => (
                    <View>
                    <Image source={require('../../assets/images/product-photo.png')} style={styles.detailsBanner} />
                    <View style={styles.iconMainContainer}>
                        <View style={styles.iconContainer}>
                            <ImageButton source={require('../../assets/images/heart.png')} />
                        </View>
                        <View style={styles.iconContainer}>
                            <ImageButton source={require('../../assets/images/bag.png')} />
                        </View>
                    </View>
                </View>
                )}
                paginationStyleItem={{height: 10, width: 10, marginTop: 7}}
                paginationStyleItemActive={{backgroundColor: '#000'}}
                paginationStyleItemInactive={{backgroundColor: '#A7A7A7'}}
            />
        </View>
    )
}

export default ProductSlider

const styles = StyleSheet.create({
    container: {
        height: 500,
        backgroundColor: bgTheme,
        width: screenWidth,
    },
    child: {
        width: screenWidth,
        height: '100%',
    },
    image: {
        height: '85%',
        width: '100%',
        resizeMode: 'stretch'
    },
    iconMainContainer: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    iconContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsBanner: {
        height: 500,
        width: screenWidth
    },
})