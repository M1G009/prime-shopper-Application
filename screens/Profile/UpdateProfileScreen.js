import React, { useCallback } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import globalStyle from '../../constants/globalStyle'
import { useForm } from "react-hook-form";
import IconInput from '../../components/UI/inputs/IconInput'
import Box from '../../components/UI/Box'
import Button from '../../components/UI/buttons/Button'
import { screenHeight } from '../../constants/orientation'

const UpdateProfileScreen = (props) => {

    const { control, handleSubmit, reset } = useForm();

    const onSubmit = useCallback((data) => {
        console.log(data)
        props.navigation.navigate('Main')
    })

    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />

           

                <View style={styles.card}>
                    <Image source={require('../../assets/images/profile.png')} style={styles.profile} />
                    <TouchableOpacity style={styles.editIconContainer}>
                        <Image source={require('../../assets/images/edit.png')} style={styles.editIcon} />
                    </TouchableOpacity>
                </View>

                <Box height={40} />

                <KeyboardAvoidingView behavior="height">

                <ScrollView style={{ padding: 20, height: screenHeight/1.63 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, marginRight: 20 }}>
                            <IconInput
                                control={control}
                                label="First Name"
                                inputOptions={{
                                    placeholder: "Ex. John",
                                }}
                                name="firstName"
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <IconInput
                                control={control}
                                label="Last Name"
                                inputOptions={{
                                    placeholder: "Ex. Doe",
                                }}
                                name="lastName"
                            />
                        </View>
                    </View>

                    <IconInput
                        control={control}
                        label="Email or Phone Number"
                        inputOptions={{
                            placeholder: "Ex. johndoe@gmail.com",
                        }}
                        name="email"
                    />

                    <IconInput
                        control={control}
                        label="Phone Number"
                        inputOptions={{
                            placeholder: "Ex. +91 9876543210",
                            keyboardType: "numeric"
                        }}
                        name="phoneNumber"
                    />

                    <IconInput
                        control={control}
                        label="Shopping Address"
                        inputOptions={{
                            placeholder: "Ex. Lorem Ipsum",
                        }}
                        name="shoppingAddress"
                    />

                    <IconInput
                        control={control}
                        label="Billing Address"
                        inputOptions={{
                            placeholder: "Ex. Lorem Ipsum",
                        }}
                        name="billingAddress"
                    />

                    <IconInput
                        control={control}
                        label="Pincode"
                        inputOptions={{
                            placeholder: "357848",
                            keyboardType: "Ex. numeric"
                        }}
                        name="pincode"
                    />

                    <Button label="Submit" onPress={handleSubmit(onSubmit)} />

                    <Box height={50} /> 

                </ScrollView>

            </KeyboardAvoidingView>

        </View>
    )
}

export default UpdateProfileScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#CEECF3',
        height: 100
    },
    profile: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
        position: 'absolute',
        left: 20,
        bottom: -30,
        zIndex: 10
    },
    editIconContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 6,
        borderRadius: 50,
        width: 25,
        height: 25,
        position: 'absolute',
        left: 65,
        bottom: -25,
        zIndex: 99
    },
    editIcon: {
        height: 12,
        width: 12,
        resizeMode: 'contain'
    },
})