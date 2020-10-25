import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import Slide from '../components/Slide'

import css from '../config/styles'
import colors from '../config/colors'

const {width} = Dimensions.get("window");

const Page = ({...props}) => {

    const [height, setHeight] = useState(0);
    const scrollToNext = useRef(<ScrollView />)

    const [contentH, setContentH] = useState(0)

    const find_dimesions = (layout) => {
        setHeight(layout);
    }

    const subHeading = () => {
        if(props.state.yPos < 800 || contentH < 2) {
            console.log(contentH)
            console.log("Less")
            return (
                <View onLayout={(event) => { find_dimesions(event.nativeEvent.layout.height) }}>
                    <Text style={styles.bigText}>{props.title}</Text>
                    <Text style={styles.normal}>{props.subTitle}</Text>
                </View>
            )
        } else if ((props.state.yPos > 800 && props.state.yPos < 1200) || contentH > 2) {
            console.log("Here")
            return (
                <View>
                    <Text style={styles.bigText}>Set Password</Text>
                    <Text style={styles.normal}>{props.subTitle}</Text>
                </View>
            )
        } else {
            return null
        }
    }

    const dataSet = [
        {
            onPress: function() { 
                if(scrollToNext.current) { 
                    scrollToNext.current.scrollTo({x: width * 1, animated: true});
                    setContentH(0);
                } 
            },
            text: props.buttonLabel,
            color: colors.black,
            placeholder1: props.placeholder1,
            placeholder2: props.placeholder2,
            style: styles.loginInput,
            position: props.state.yPos,
            contentHeight: props.state.height + height,
            id_: 0
        },
        {
            onPress: function() { 
                if(scrollToNext.current) { 
                    scrollToNext.current.scrollTo({x: width * 2, animated: true}) 
                    setContentH(1);
                } 
            },
            text: props.buttonLabel,
            color: colors.black,
            placeholder1: "Email address",
            placeholder2: "Alternative email",
            style: styles.loginInput,
            position: props.state.yPos,
            contentHeight: props.state.height + height,
            id_: 1
        },
        {
            onPress: function() { 
                if(scrollToNext.current) { 
                    scrollToNext.current.scrollTo({x: width * 3, animated: true}) 
                    setContentH(2);
                } 
            },
            text: props.buttonLabel,
            color: colors.black,
            placeholder1: "Password",
            placeholder2: "Repeat Password",
            style: styles.loginInput,
            position: props.state.yPos,
            contentHeight: props.state.height + height,
            id_: 2
        },
        {
            onPress: function() { 
                if(scrollToNext.current) { 
                    scrollToNext.current.scrollTo({x: width * 4, animated: true}) 
                    setContentH(3);
                } 
            },
            text: "Age",
            color: colors.black,
            placeholder1: props.placeholder1,
            placeholder2: props.placeholder2,
            style: styles.loginInput,
            position: props.state.yPos,
            contentHeight: props.state.height + height,
            id_: 3
        },
        {
            onPress: props.onPress,
            text: "Sign Up Account",
            color: colors.black,
            placeholder1: props.placeholder1,
            placeholder2: props.placeholder2,
            style: styles.loginInput,
            position: props.state.yPos,
            contentHeight: props.state.height + height,
            id_: 4
        },
    ]

    const returnSlider = () => {
        return dataSet.map((item) => {
            return (
                <Slide 
                    key={item.id_}
                    id_={item.id_}
                    onPress={item.onPress}
                    text={item.text}
                    color={item.color}
                    placeholder2={item.placeholder2}
                    placeholder1={item.placeholder1}
                    style={item.style}
                    position={item.position}
                    contentHeight={item.contentHeight}
                />
            )
        })
    }

    return (
        <View style={{width: css.w1, height: css.w1}}>
            <View style={styles.half1_}>
                {subHeading()}
                <ScrollView showsVerticalScrollIndicator={false} style={{width: css.w1}}>
                    <KeyboardAvoidingView style={{width: css.w1}}>
                        
                        <ScrollView 
                            onMomentumScrollEnd={props.handleScroll} 
                            style={{width: "100%"}} 
                            horizontal 
                            snapToInterval={width} 
                            decelerationRate="fast"
                            bounces="false"
                            ref={scrollToNext}
                        >
                            {returnSlider()}
                        </ScrollView>

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

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPos: 0,
            height: 0,
            viewHeight: 0
        };
    }

    handleScroll = (event) => {
        this.setState({ yPos: event.nativeEvent.contentOffset.x })
        console.log(this.state.yPos)
        if(this.state.yPos < 800) {
            this.setState({ height: event.nativeEvent.contentSize.height})
        }
    }

    render() {
        return (
            <Page 
                state={this.state} 
                handleScroll={this.handleScroll} 
                placeholder1={this.props.placeholder1}
                placeholder2={this.props.placeholder2}
                title={this.props.title}
                subTitle={this.props.subTitle}
                buttonLabel={this.props.buttonLabel}
                position={this.state.yPos}
                contentHeight={this.state.height}
            />
        );
    }
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
        paddingHorizontal: 18
    },
    normal: {
        fontSize: css.normal,
        color: colors.faintedBlack,
        paddingBottom: "15%",
        paddingHorizontal: 18
    },
    loginInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.gray,
        fontSize: css.normal,
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    helpContainer: {
        padding: 10,
        paddingTop: "10%"
    },
    login: {
        color: "#d61b0a",
        fontSize: 18,
        marginTop: "2%",
        paddingHorizontal: 18
    },
    notes: {
        color: "#000000",
        fontSize: 16,
        paddingHorizontal: 18
    }
})

export default RegistrationForm;