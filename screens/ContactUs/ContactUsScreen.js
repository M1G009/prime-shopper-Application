import React, { useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import MainHeader from '../../components/headers/MainHeader'
import SearchInput from '../../components/UI/inputs/SearchInput'
import globalStyle from '../../constants/globalStyle'
import { useForm } from "react-hook-form";
import IconInput from '../../components/UI/inputs/IconInput'
import Box from '../../components/UI/Box'
import { screenHeight } from '../../constants/orientation'
import Button from '../../components/UI/buttons/Button'

const ContactUsScreen = (props) => {

    const { control, handleSubmit, reset } = useForm();

    const onSubmit = useCallback((data) => {
        console.log(data)
    })

    return (
        <View style={globalStyle.container}>

            <MainHeader navigation={props.navigation} />
            <SearchInput />
            
            <KeyboardAvoidingView behavior="height">
                <ScrollView contentContainerStyle={{ backgroundColor: '#fff', paddingHorizontal: 20, height: screenHeight - 190 }}>

                    <Text style={globalStyle.textBold}>Get in Touch</Text>

                    <Box height={50} />

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
                        label="Email"
                        icon={require('../../assets/images/email.png')}
                        inputOptions={{
                            placeholder: "Ex. johndoe@gmail.com",
                        }}
                        name="email"
                    />

                    <IconInput
                        control={control}
                        label="Phone Number"
                        icon={require('../../assets/images/phone.png')}
                        inputOptions={{
                            placeholder: "+91 9876543210",
                            keyboardType: "numeric"
                        }}
                        name="phoneNumber"
                    />

                    <IconInput
                        control={control}
                        label="Subject"
                        inputOptions={{
                            placeholder: "Ex. Lorem Ipsum Doner Sumet",
                        }}
                        name="subject"
                    />

                    <IconInput
                        control={control}
                        label="Your Message"
                        inputOptions={{
                            placeholder: "Your Message Here...",
                        }}
                        name="message"
                    />

                    <Box height={30} />
                    <Button label="Submit" onPress={handleSubmit(onSubmit)} />

                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default ContactUsScreen

const styles = StyleSheet.create({})
