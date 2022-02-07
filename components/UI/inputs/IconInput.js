import React, { useState } from 'react';

import {

    View,
    TextInput,
    Image,
    StyleSheet,
    Text

} from 'react-native';


import { Controller } from "react-hook-form";
import { placeholderTextColor } from '../../../constants/colors';
import globalStyle from '../../../constants/globalStyle';

const IconInput = (props) => {

    return <Controller
        control={props.control}
        render={({ field }) => (

            <View style={{ width: '100%', marginBottom: 30 }}>

                {props.label &&
                    <Text style={styles.label}>{props.label}<Text style={globalStyle.star}> *</Text></Text>
                }

                <View style={{ ...styles.loginFieldsView }}>
                    <TextInput
                        {...props.inputOptions}
                        onBlur={() => field.onBlur()}
                        onFocus={() => { }}
                        onChangeText={value => field.onChange(value)}
                        value={field.value}
                        style={{ ...styles.inputField, ...props.inputStyle }}
                        placeholderTextColor={placeholderTextColor}
                    />

                    {props.icon && <Image style={styles.icon} source={props.icon} />}

                </View>

            </View>
        )}
        name={props.name}
        rules={{ required: props.required }}
        defaultValue={props.value ? props.value : ''}
    />

}

const styles = StyleSheet.create({
    loginFieldsView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: placeholderTextColor,
    },
    icon: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginBottom: 7
    },
    inputField: {
        paddingBottom: 5,
        width: '93%',
        color: '#000',
    },
    label: {
        fontFamily: 'Montserrat-SemiBold'
    }
})


export default IconInput;