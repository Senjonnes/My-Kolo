import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from './app/screens/WelcomeScreen';
import LandingPageScreen from './app/screens/LandingPageScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen'

import { TouchableOpacity } from 'react-native-gesture-handler';
import StatusBarColor from './app/components/StatusBarColor'

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBarColor backgroundColor="#772ea2" barStyle="light-content"/>
      <AuthStack.Navigator screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerShown: true,
        headerTintColor: "#ffffff",
        headerStyle: { borderBottomWidth: 0, },
        headerTitleStyle: {
          alignSelf: 'flex-end'
        },
        headerStyle: {
          height: 70
        },
        headerTitle: <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.headerText2}>Skip Here</Text>
      })}>
        <AuthStack.Screen options={({ navigation }) => ({
          headerTitle: <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.headerText}>Skip Here</Text>
        })} name="LandingPageScreen" component={LandingPageScreen} />

        <AuthStack.Screen options={{header: () => null}} name="WelcomeScreen" component={WelcomeScreen} />
        <AuthStack.Screen options={({ navigation }) => ({ headerTintColor: "#000000" })} name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen options={({ navigation }) => ({ headerTintColor: "#000000" })} name="SignupScreen" component={SignupScreen} />
      
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: "#ffffff",
    textAlign: "right",
    position: "absolute",
    fontSize: 16
  },
  headerText2: {
    color: "#000000",
    textAlign: "right",
    position: "absolute",
    fontSize: 16
  }
});
