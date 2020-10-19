import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';


import LogoImage from '../components/Logo';
import AppButton from '../components/AppButton'

import css from '../config/styles'
import colors from '../config/colors'

import splash from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import { TextInput } from 'react-native-gesture-handler';

function LoginScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={splash}>
            <View style={styles.headerLogo}><LogoImage /></View>

            <View style={styles.half1}>
                <View style={styles.half1_}>
                    <Text style={styles.bigText}>Welcome back!</Text>
                    <Text style={styles.normal}>Enter your registered phone number to log in</Text>
                </View>
            </View>

            <View style={styles.half2}>
                <View style={styles.half2_}>
                    <View style={{padding: 10}}>
                        <TextInput placeholder="+234 000 000 0000" style={styles.loginInput} />
                    </View>
                    <AppButton onPress={() => {navigation.navigate('SignupScreen')}} text="Login" color="#000000" />
                    <View style={styles.helpContainer}>
                        <Text style={styles.help}>Help?</Text>
                    </View>
                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 22
    },
    headerLogo: {
        position: "absolute",
        top: 0,
        zIndex: 100
    },
    half1: {
        height: "35%",
        width: "100%",
    },
    half1_: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        padding: 10

    },
    half2: {
        height: "65%",
        width: "100%",
    },
    half2_: {
        height: "100%",
        width: "100%",
        paddingTop: "16%",
    },
    bigText: {
        fontSize: css.bigText,
        fontWeight: "700"
    },
    normal: {
        fontSize: css.normal,
        color: colors.faintedBlack
    },
    loginInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.gray,
        fontSize: css.normal,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    helpContainer: {
        padding: 10
    },
    help: {
        color: "#d61b0a",
        fontSize: 16,
    }
})

export default LoginScreen;