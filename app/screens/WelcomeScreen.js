import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import splash from '../assets/background.jpg';
import logo from '../assets/logo-red.png';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={splash}>
            <View style={styles.imgView}>
                <Image style={styles.imgStyle} source={logo} />
                <Text style={styles.textStyle}>Sell What You Don't Need</Text>
            </View>
            <Button 
                title="Create Account"
                style={styles.loginBtn}
                onPress={() => navigation.navigate("LandingPageScreen")}
                />
            <Button title="Create Account" style={styles.registerBtn} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginBtn: {
        backgroundColor: "#fc5c65",
        width: "100%",
        height: 70
    },
    registerBtn: {
        backgroundColor: "#4ecdc4",
        width: "100%",
        height: 70
    },
    imgStyle: {
        height: 70,
        width: 70,
    },
    imgView: {
        position: "absolute",
        top: "10%",
        alignItems: "center"
    },
    textStyle: {
        marginTop: "5%",
        fontSize: 16,
        color: "#fc5c65",
        fontWeight: "700"
    }
})

export default WelcomeScreen;