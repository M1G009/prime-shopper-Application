import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import MainHeader from '../../components/headers/MainHeader'
import Box from '../../components/UI/Box'
import ImageButton from '../../components/UI/buttons/ImageButton'
import SearchInput from '../../components/UI/inputs/SearchInput'
import { bgTheme } from '../../constants/colors'
import globalStyle from '../../constants/globalStyle'
import styles from './ProductStyles'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { collections } from '../../constants/data'
import ProductCard from '../../components/cards/ProductCard'
import ProductSlider from '../../components/product/ProductSlider'

const ProductDetailsScreen = (props) => {

    const colors = ["#FCA21E", "#3E3E3E", "#6B6B6B", "#959595", "#BABABA", "#D2D2D2"]

    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <ScrollView>

                <ProductSlider />

                <View style={{ padding: 20 }}>

                    <Text style={globalStyle.textSemiBold}>Dark Orange</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {colors.map((color, index) => <View
                            style={{
                                ...styles.round,
                                backgroundColor: color,
                                borderColor: index == 0 ? '#000' : bgTheme
                            }}>

                        </View>)}
                    </View>

                    <Text style={globalStyle.textSemiBold}>Size</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.round}><Text style={globalStyle.textSemiBold}>S</Text></View>
                        <View style={styles.round}><Text style={globalStyle.textSemiBold}>M</Text></View>
                        <View style={styles.round}><Text style={globalStyle.textSemiBold}>L</Text></View>
                        <View style={styles.round}><Text style={globalStyle.textSemiBold}>XL</Text></View>
                        <View style={styles.round}><Text style={globalStyle.textSemiBold}>XXL</Text></View>
                    </View>

                    <View style={styles.card}>

                        <Text style={globalStyle.textRegular}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Text>
                        <Box />

                        <Text style={globalStyle.textRegular}><Text style={globalStyle.textSemiBold}>Fit</Text> - Slim Fit</Text>
                        <Text style={globalStyle.textRegular}><Text style={globalStyle.textSemiBold}>Composition</Text> - Cotton 95%</Text>
                        <Text style={globalStyle.textRegular}><Text style={globalStyle.textSemiBold}>Materials</Text> - Organic Cotton 95%</Text>
                        <Text style={globalStyle.textRegular}><Text style={globalStyle.textSemiBold}>Artical Number</Text> - 0235645242</Text>

                    </View>

                    <Box height={20} />

                    <Collapse>
                        <CollapseHeader>
                            <View style={styles.collapseHeader1}>
                                <Text style={globalStyle.textSemiBold}>Details</Text>
                                <Image source={require('../../assets/images/chevron-down.png')} style={styles.downArrow} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse>
                        <CollapseHeader>
                            <View style={styles.collapseHeader1}>
                                <Text style={globalStyle.textSemiBold}>Product Background</Text>
                                <Image source={require('../../assets/images/chevron-down.png')} style={styles.downArrow} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <Text>Ta daa!</Text>
                        </CollapseBody>
                    </Collapse>

                    <Box height={20} />
                    <Text style={globalStyle.textMedium}>Materials</Text>

                    <Box />
                    <Text style={globalStyle.textRegular12}>Our goal is to use 100% recycled or other sustainbly sourced materials by 2030. </Text>
                    <Box />
                    <Text style={globalStyle.textRegular12}>Cotton 95%, Elastane 5%.</Text>
                    <Box />

                    <View style={{ ...styles.card, padding: 15 }}>
                        <Collapse>
                            <CollapseHeader>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={globalStyle.textSemiBold}>Cotton</Text>
                                    <Text style={globalStyle.textSemiBold}>+</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text>Ta daa!</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>

                    <Box />

                    <View style={{ ...styles.card, padding: 15 }}>
                        <Collapse>
                            <CollapseHeader>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={globalStyle.textSemiBold}>Cotton</Text>
                                    <Text style={globalStyle.textSemiBold}>+</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text>Ta daa!</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>

                    <Text style={{ ...globalStyle.textMedium, marginVertical: 20 }}>Our Suppliers</Text>
                    <Text style={globalStyle.textRegular12}>This product has been produced in one of the following countries: </Text>
                    <Text style={globalStyle.textRegular12}>  -India</Text>
                    <Box />
                    <Text style={globalStyle.textRegular12}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                    <Box height={20} />
                    <View style={styles.collapseHeader1}>
                        <Text style={globalStyle.textSemiBold}>Share</Text>
                    </View>
                    <View style={styles.collapseHeader1}>
                        <Text style={styles.text1}>Delivery in 2 - 7 Days</Text>
                    </View>

                    <Box height={20} />
                    <Text style={globalStyle.textLeftBold}>Styles With</Text>

                    <FlatList
                        data={[collections[0], collections[1]]}
                        renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                            <ProductCard navigation={props.navigation} item={item} />
                        </View>}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />

                    <Text style={globalStyle.textLeftBold}>Others Also Bought</Text>

                    <FlatList
                        data={[collections[0], collections[1]]}
                        renderItem={({ item, index }) => <View style={{ ...styles.productCardContainer, marginLeft: index % 2 !== 0 ? 0 : 15 }}>
                            <ProductCard navigation={props.navigation} item={item} />
                        </View>}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />

                </View>

            </ScrollView>

        </View>
    )
}

export default ProductDetailsScreen