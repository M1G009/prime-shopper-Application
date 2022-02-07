import React, { useState, useCallback } from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useForm } from "react-hook-form";
import DetailsHeader from '../../components/headers/DetailsHeader'
import IconInput from '../../components/UI/inputs/IconInput'
import globalStyle from '../../constants/globalStyle'
import styles from './LoginStyles'
import Button from '../../components/UI/buttons/Button';
import Checkbox from 'expo-checkbox';
import Box from '../../components/UI/Box';

const LoginScreen = (props) => {

    const { control, handleSubmit, reset } = useForm();
    const [isChecked, setChecked] = useState(false);

    const onSubmit = useCallback((data) => {
        console.log(data)
        props.navigation.navigate('Main')
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
                        <Text style={globalStyle.head}>We're glad to have you back!</Text>
                        <Text style={globalStyle.head}>You're already registered with us!</Text>
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

                        <IconInput
                            control={control}
                            label="Password"
                            icon={require('../../assets/images/password.png')}
                            inputOptions={{
                                placeholder: "Ex. johndoe12345",
                                secureTextEntry: true
                            }}
                            name="password"
                        />

                        <View style={styles.policyContainer}>
                            <Checkbox
                                style={styles.chk}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#000' : undefined}
                            />
                            <View>
                                <Text style={styles.policyText}>By selecting agree and continue below,</Text>
                                <Text style={styles.policyText}>I agree to <Text style={globalStyle.Ulink}>Terms of Service and Privacy Policy</Text></Text>
                            </View>
                        </View>

                        <Box height={30} />
                        <Button label="Login" onPress={handleSubmit(onSubmit)} />

                        <TouchableOpacity style={styles.forgotPasswordLink} onPress={() => props.navigation.navigate('ForgotPassword')}>
                            <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Forgot Password ? </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    )
}

export default LoginScreen
