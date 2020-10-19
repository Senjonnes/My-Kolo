import React from 'react';
import { Image, StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import background from '../assets/chair.jpg';
import kolo from '../assets/kolo.png';
import color from '../config/colors';

function LandingPageScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={background}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image style={styles.imageStyle} source={kolo} />
                    <View style={styles.textCont}>
                        <Text style={[styles.textStle, styles.colorWhite]}>Save n Earn</Text>
                        <Text style={[styles.textStle, styles.colorRed]}>with MyKolo savings box</Text>
                    </View>
                    <View style={styles.iconStyleContainer}>
                        <TouchableOpacity style={{height: "100%", width: "100%"}} onPress={() => navigation.navigate('LoginScreen')}>
                            <Icon color="#d78000" name="angle-right" size={30} />
                        </TouchableOpacity>
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
        alignItems: "center"
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        width: "100%"
    },
    container2: {
        flexDirection: "column",
        height: "40%",
        width: "100%",
        padding: 10
    },
    textCont: {
        paddingHorizontal: 30
    },
    colorWhite: {
        color: color.colorWhite
    },
    colorRed: {
        color: color.colorRed
    },
    textStle: {
        fontSize: 18,
        fontWeight: "700",
        paddingVertical: 5
    },
    imageStyle: {
        width: "40%",
        height: "40%",
    },
    closeIcon: {
        flexDirection: "row",
        position: "relative",
        top: 20
    },
    closeBtn: {
        backgroundColor: color.secondary,
        height: 50,
        width: 50,
        position: "absolute",
        top: "10%",
        right: "10%"
    },
    successBtn: {
        backgroundColor: color.primary,
        height: 50,
        width: 50,
        position: "absolute",
        top: "10%",
        left: "10%"
    },
    iconStyleContainer: {
        position: "absolute",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        bottom: "20%",
        right: "20%",
    }
})

export default LandingPageScreen;