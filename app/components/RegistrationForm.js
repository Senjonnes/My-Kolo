import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, KeyboardAvoidingView } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoImage from '../components/Logo';
import AppButton from '../components/AppButton'

import css from '../config/styles'
import colors from '../config/colors'

import splash from '../assets/background.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function RegistrationForm({ navigation, ...props }) {
    return (
                <View style={{width: css.w1, height: css.w1}}>
                    <View style={styles.half1_}>
                        <Text style={styles.bigText}>{props.title}</Text>
                        <Text style={styles.normal}>{props.subTitle}</Text>
                        <ScrollView style={{width: css.w1}}>
                            <KeyboardAvoidingView style={{width: css.w1}}>
                                <View style={{padding: 10}}>
                                    <TextInput placeholder={props.placeholder1} style={styles.loginInput} />
                                </View>
                                <View style={{padding: 10}}>
                                    <TextInput placeholder={props.placeholder2} style={styles.loginInput} />
                                </View>
                                <AppButton onPress={props.onPress} text={props.buttonLabel} color="#000000" />
                                <View style={styles.helpContainer}>
                                    <Text style={styles.notes}>Already have an Account?</Text>
                                    <Text style={styles.login}>LOGIN <Icon color="#d61b0a" name="angle-right" size={20}/></Text>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </View>
    );
}

const styles = StyleSheet.create({
    half1: {
        height: "100%",
        width: "100%",
    },
    half1_: {
        height: "100%",
        width: "100%",
        paddingTop: "48%",
    },
    bigText: {
        fontSize: css.bigText,
        fontWeight: "700",
        paddingHorizontal: 10
    },
    normal: {
        fontSize: css.normal,
        color: colors.faintedBlack,
        paddingBottom: "15%",
        paddingHorizontal: 10
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
    login: {
        color: "#d61b0a",
        fontSize: 18,
        marginTop: "2%"
    },
    notes: {
        color: "#000000",
        fontSize: 16,
    }
})

export default RegistrationForm;