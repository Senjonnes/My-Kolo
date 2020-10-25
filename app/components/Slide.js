import React from 'react';
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import AppButton from './AppButton';

import boy from '../assets/boy.png';
import css from '../config/styles'

class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const viewsToShow = () => {
            if(this.props.position > 1200 && this.props.position < 1600) {
                return (
                    <View style={{width: Dimensions.get("window").width, backgroundColor: "red", height: this.props.contentHeight}}>
                        <View style={styles.container}>
                            <Image style={styles.boy} source={boy} />
                            <Image style={styles.boy} source={boy} />
                        </View>
                        <View style={{paddingHorizontal: 12}}>
                            <AppButton onPress={this.props.onPress} text={this.props.text} color={this.props.color} />
                        </View>
                    </View>
                )
            } else if(this.props.position > 1600) {
                return (
                    <View style={{width: Dimensions.get("window").width, height: this.props.contentHeight}}>
                        <View style={styles.container2}>
                            <Image style={styles.boy2} source={boy} />
                            <View>
                                <Text style={styles.textSize}>Upload</Text>
                                <Text style={styles.textSize}>Profile Picture</Text>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 12}}>
                            <AppButton onPress={this.props.onPress} text={this.props.text} color={this.props.color} />
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={{width: Dimensions.get("window").width}}>
                        <View style={{padding: 10, marginHorizontal: 12}}>
                            <TextInput placeholder={this.props.placeholder1} style={this.props.style} />
                        </View>
                        <View style={{padding: 10, marginHorizontal: 12}}>
                            <TextInput placeholder={this.props.placeholder2} style={this.props.style} />
                        </View>
            
                        <View style={{paddingHorizontal: 12}}>
                            <AppButton onPress={this.props.onPress} text={this.props.text} color={this.props.color} />
                        </View>
                    </View>
                )
            }
        }

        return (
            viewsToShow()
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "15%"
    },
    container2: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "10%"
    },
    boy: {
        height: 120,
        width: 120
    },
    boy2: {
        height: 120,
        width: 120,
        marginRight: "10%",
    },
    textSize: {
        fontSize: css.medium,
    }
})

export default Slide;