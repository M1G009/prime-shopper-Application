import React, { useState, useCallback } from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useForm } from "react-hook-form";
import DetailsHeader from '../../components/headers/DetailsHeader'
import IconInput from '../../components/UI/inputs/IconInput'
import globalStyle from '../../constants/globalStyle'
import styles from './RegistrationStyles'
import Button from '../../components/UI/buttons/Button';
import Checkbox from 'expo-checkbox';
import FacebookButton from '../../components/UI/buttons/FacebookButton';
import GoogleButton from '../../components/UI/buttons/GoogleButton';
import Box from '../../components/UI/Box';

const RegistrationScreen = (props) => {
    const { control, handleSubmit, reset } = useForm();
    const [isChecked, setChecked] = useState(false);
    
    const onSubmit = useCallback((data) => {
        console.log(data)
    })

    return (

        <View style={globalStyle.container}>

            {/* Header */}
            <DetailsHeader />

            <KeyboardAvoidingView behavior="height">
                <ScrollView contentContainerStyle={globalStyle.contentContainer} >

                    {/* Top Content */}
                    <View style={globalStyle.columnCenterX} >
                        
                        <Image source={require('../../assets/images/PS-logo.png')} style={globalStyle.logo} />
                       
                        <Text style={{ fontFamily: 'Montserrat-Regular' }}>Sign Up with</Text>
                       
                        <View style={styles.buttonContainer}>
                            <FacebookButton />
                            <GoogleButton />
                        </View>
                        
                        <Text style={{ fontFamily: 'Montserrat-Regular', marginVertical: 15 }}>Or</Text>

                        <IconInput
                            control={control}
                            label="User Name"
                            icon={require('../../assets/images/user.png')}
                            inputOptions={{
                                placeholder: "Ex. john doe",
                            }}
                            name="username"
                        />

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

                        <Box height={20} />
                        <Button label="Sign Up" onPress={handleSubmit(onSubmit)} />

                        <TouchableOpacity style={styles.forgotPasswordLink} onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ fontFamily: 'Montserrat-SemiBold' }}> Already have an Account ? </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    )
}

export default RegistrationScreen