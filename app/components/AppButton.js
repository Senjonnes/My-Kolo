import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AppButton(props) {
    
    return (
        <TouchableOpacity style={{padding: 10}} onPress={props.onPress}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginTop: "6%",
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },  
        shadowColor: '#555555',  
        shadowOpacity: 0.5,  
        elevation: 5,
        zIndex: 999 
    },
    text: {
        color: "#ffffff",
        fontSize: 20,
    }
})