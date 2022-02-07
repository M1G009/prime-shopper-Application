import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import globalStyle from '../../constants/globalStyle'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import styles from './AboutUsStyles'
import Box from '../../components/UI/Box'
import StatisticsCard from '../../components/cards/StatisticsCard'

const AboutUsScreen = (props) => {
    return (
        <View style={globalStyle.container}>
            
            <MainHeader navigation={props.navigation} />

            <SearchInput />

            <ScrollView style={{ backgroundColor: '#fff' }}>

                <Text style={globalStyle.textBold}>Who We Are?</Text>
                <Image source={require('../../assets/images/hero-banner.png')} style={styles.banner} />

                <View style={{ padding: 20 }}>

                    <View style={styles.card}>
                        <Text style={styles.cardText}>With the trendiest, freshest, and most unique styles from across India and the world, AJIO invites you to express your personal style fearlessly, and with a confidence and optimism that cannot be easily shaken.</Text>
                    </View>

                    <Text style={globalStyle.textLeftBold}>Prime Shopper Own</Text>
                    <Text style={globalStyle.textRegular12}>AJIO OWN is our private label – that’s designed by us, and owned by you. If you’re looking for head-turning styles that are one-of-a-kind, AJIO OWN is what you should stock up on.</Text>

                    <Text style={globalStyle.textLeftBold}>Exclusive International Labels</Text>
                    <Text style={globalStyle.textRegular12}>We bring you the trendiest and most exclusive brands from around the world to your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you covered.</Text>
                    
                    <Box height={15} />

                    <View style={styles.card}>
                        <Text style={styles.cardText}>Why let a world that loves to police your wardrobe and your expression get the upper hand, anyway?</Text>
                        <Box />
                        <Text style={styles.cardText}>So the next time someone says ‘Oh, that dress is too bold’ ‘Are you sure you’re the right size for this?’ ‘Maybe you should pick a colour that suits you’ or ‘Act your age and wear something else’, go ahead and do exactly what you please. When it comes to great style and personal expression, there should never be any regrets.</Text>
                    </View>

                    <Text style={globalStyle.textLeftBold}>Capsule Collections</Text>
                    <Text style={globalStyle.textRegular12}>If there’s an occasion to express your personal style, we’ve got a capsule collection to match. Shopping for a specific mood, event or style story has never been easier. </Text>

                    <Text style={globalStyle.textLeftBold}>The Indie Experience</Text>
                    <Text style={globalStyle.textRegular12}>Our Indie styles are literally art you can wear. They are carefully handpicked, so that only the most authentic, handcrafted pieces by artisans across the country and globe make the cut.</Text>

                    <Text style={globalStyle.textLeftBold}>Prime Shopper Style Tribe</Text>
                    <Text style={globalStyle.textRegular12}>A high-fashion editorial where we feature the internet’s coolest cats. It’s where you get to read the stories of these influencers and shop their stunning shoot looks.</Text>

                    <Text style={globalStyle.textLeftBold}>#Primeshoppertoday</Text>
                    <Text style={globalStyle.textRegular12}>Our daily trend spotlight that lets you in on what’s hip and happening, and what you should be carting right now. Like they say, a trend each day keeps the blues away!</Text>

                    <Text style={globalStyle.textLeftBold}>#Primeshopperrecommends</Text>
                    <Text style={globalStyle.textRegular12}>From the hailstorm of trends coming down on us every season, we only recommend the ones guaranteed to put you on the hit list. Watch out for these regular highlights.</Text>

                    <Text style={globalStyle.textLeftBold}>#recommendsPrimeshopper</Text>
                    <Text style={globalStyle.textRegular12}>This is where we celebrate and showcase our most stylish customers, who’ve given us a shout-out on social while dressed in a trendy AJIO style. You could very well be on the list too.</Text>

                    <Box height={20} />
                    
                    <StatisticsCard />
               
                </View>

            </ScrollView>

        </View>
    )
}

export default AboutUsScreen