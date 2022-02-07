import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { bgTheme } from '../../constants/colors';
import { screenWidth } from '../../constants/orientation';

const Slider = () => {

    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={5}
                index={3}
                autoplayLoop
                // showPagination
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => (
                    <View style={styles.child}>
                        <Image source={require('../../assets/images/hero-banner.png')} style={styles.image} />
                    </View>
                )}
                paginationStyleItem={{ height: 10, width: 10, marginTop: 7 }}
                paginationStyleItemActive={{ backgroundColor: '#000' }}
                paginationStyleItemInactive={{ backgroundColor: '#A7A7A7' }}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        height: 170,
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
})