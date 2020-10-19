import React from 'react';
import { View, StatusBar, StyleSheet, Platform, Image,} from 'react-native';

import kolo from '../assets/kolo.png';

function LogoImage () {
    return (
        <View style={styles.statusBar}>
            <Image style={styles.imageStyle} source={kolo} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
    }
})

export default LogoImage;