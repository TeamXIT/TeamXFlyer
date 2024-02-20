import {
    TouchableOpacity,
    Text,
    View
} from "react-native";
import React, { } from 'react';
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../Styles/Styles";
const RegisterScreen = (props) => {

    function handleSubmitPress(): void {
        props.navigation.navigate('VerificationScreen');
    }

    function handleLogin(): void {
        props.navigation.navigate('LoginScreen');
    }

    return (
        <View style={styles.viewbackground}>
            <Text style={styles.headstyle}>Create Account</Text>

            <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder=" Mail ID" />
            <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder="Full Name" />

            <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder="Password" />

            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>Create</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginlink}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    );
};

export default RegisterScreen;