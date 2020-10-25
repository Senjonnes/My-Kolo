import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';


import LogoImage from '../components/Logo';
import RegistrationForm from '../components/RegistrationForm'

import splash from '../assets/background.jpg';

function LoginScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={splash}>
            <View style={styles.headerLogo}><LogoImage /></View>
            <RegistrationForm 
                title="Sign up"
                subTitle="Require information to accaount creations"
                buttonLabel="Continue"
                placeholder1="First Name"
                placeholder2="Last Name"
                onPress={() => {navigation.navigate('SignupScreen')}}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    headerLogo: {
        position: "absolute",
        top: 0,
        zIndex: 100
    }
})

export default LoginScreen;