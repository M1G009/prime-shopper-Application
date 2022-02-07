import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingCard from '../../components/cards/SettingCard'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import globalStyle from '../../constants/globalStyle'

const SettingsScreen = (props) => {
    
    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

            <View style={styles.headContainer}>
                <Text style={globalStyle.textLeftBold}>Settings</Text>
            </View>

            <View style={{padding: 20}}>

                <SettingCard label="Country & Languages 🇮🇳" />
                <SettingCard label="Notifications" />
                <SettingCard label="Permissions" />
                <SettingCard label="Manage App Storage" />
                <SettingCard label="Rate Our App" />
                <SettingCard label="Legal & About" />
                <SettingCard label="Switch Accounts" />
                <SettingCard label="Sign Out" />

            </View>

        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
})