import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigations/AuthNavigator';
import { useFonts } from '@use-expo/font';

export default function App() {

  const [isLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat/Montserrat-Light.ttf"),
  });

  if (!isLoaded) {
    return null;
  }

  return (
      <AuthNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
});
