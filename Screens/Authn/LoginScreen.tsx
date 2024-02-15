import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
    View
} from "react-native";
import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
   
    function handleSubmitPress(): void {
        if (!name) {
            Alert.alert("Invalid", "Enter User Name");
            return;
        }
        if (!password) {
            Alert.alert("Invalid", "Enter password");
            return;
        }
        Alert.alert("Valid", "Success!");
        navigation.replace('Dashboard');
        //AsyncStorage.setItem("userid", name);
    }

    function handleNavigationPress(): void {
        navigation.navigate('RegisterScreen');
    }

    return (
        <View>
            <Text>Welcome to Login</Text>

            <TextInput placeholder="Enter Name" onChangeText={(name) => {
                setName(name);
            }} style={{ borderColor: '#EDC7C6' }} />
            <Text>{name}</Text>
            <TextInput placeholder="Enter Password" onChangeText={(password) => {
                setPassword(password);
            }} style={{ borderColor: '#EDC7C6' }} />
             <Text>{password}</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>USER LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleNavigationPress}>
                <Text style={styles.buttonTextStyle}>Registration</Text>
            </TouchableOpacity>
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#000000",
        alignContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },

});