import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import MainNavigator from './MainNavigator';

const MainStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerShown: false
                }} 
            >
                <MainStack.Screen name="Main" component={MainNavigator} />
                <MainStack.Screen name="Registration" component={RegistrationScreen} />
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator