import React, { useState } from 'react'
import { Image, View, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { useForm } from "react-hook-form";
import DetailsHeader from '../../components/headers/DetailsHeader'
import IconInput from '../../components/UI/inputs/IconInput'
import globalStyle from '../../constants/globalStyle'
import Button from '../../components/UI/buttons/Button';
import Box from '../../components/UI/Box';
import { useCallback } from 'react';

const ForgotPasswordScreen = (props) => {

    const { control, handleSubmit, reset } = useForm();

    const onSubmit = useCallback((data) => {
        console.log(data)
    })

    return (
        <View style={globalStyle.container}>

            {/* Header */}
            <DetailsHeader onPress={() => props.navigation.goBack()} />

            <KeyboardAvoidingView behavior="height">
                <ScrollView contentContainerStyle={globalStyle.contentContainer} >

                    {/* Top Content */}
                    <View style={globalStyle.columnCenterX} >
                        <Image source={require('../../assets/images/PS-logo.png')} style={globalStyle.logo} />
                        <Text style={globalStyle.head}>Please Enter your email address or phone number to receive a verification code</Text>
                        <View style={globalStyle.hr}></View>
                    </View>

                    {/* Bottom Content */}
                    <View>

                        <IconInput
                            control={control}
                            label="Email or Phone Number"
                            icon={require('../../assets/images/email.png')}
                            inputOptions={{
                                placeholder: "Ex. johndoe@gmail.com or +91 9876543210",
                            }}
                            name="email"
                        />

                        <Box height={50} />

                        <Button label="Send OTP" onPress={handleSubmit(onSubmit)} />

                        <Box height={70} />

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    )
}

export default ForgotPasswordScreen