import React from 'react'
import { StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';

const ThemeRadio = (props) => {

    return (
        // <RadioButton
        //   value={props.value}
        //   label={props.label}
        //   status={props.checked ? 'checked' : 'unchecked'}
        //   onPress={props.onPress ? props.onPress : () => {}}
        // />
        <RadioButton
          value="first"
          label="Carto Base MAp"
          status='checked'
          onPress={() => {}}
        />
    )
}

export default ThemeRadio

const styles = StyleSheet.create({})
