import {
    TouchableOpacity,
    Text,
    StyleSheet,
    GestureResponderEvent,
    Alert,
    View
} from "react-native";
import React, { useState, createRef } from 'react';
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const LoginScreen = ({ navigation }) => {

    const [intValue, setIntValue] = useState(0);
    const [strungValue, setStringValue] = useState('');
    const [boolValue, setBoolValue] = useState(false);

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
        //AsyncStorage.setItem('user_id', name);
    }

    function handleNavigationPress(): void {
        navigation.navigate('RegisterScreen')
    }

    return (
        <View>
            <Text>Welcome to Login</Text>

            <TextInput placeholder="Enter Name" onChangeText={(name) => {
                console.log(name);
                setName(name);
            }} style={{ borderColor: '#ff0000' }} />
            <Text style={{fontWeight:'bold', color:'blue',fontSize:20}}>{name}</Text>
            <TextInput placeholder="Enter Password" onChangeText={(password) => {
                console.log(password);
                setPassword(password);
            }} style={{ borderColor: '#EDC7C6' }} />
            <Text style={{fontWeight:'bold', color:'blue',fontSize:20}}>{password}</Text>
            
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