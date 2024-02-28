import { Text, View, TouchableOpacity, TextInput, Alert, Pressable, } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import axios from 'axios';
import { getEmployees } from '../Helper/Reducers/login/loginSlice';
import { useAppDispatch, useAppSelector } from '../Helper/Reducers/hooks'

const Login = ({ navigation }) => {
    const [mailID, setmailID] = useState('netus.et.malesuada@ornarelectusjusto.co.uk');
    const [password, setpassword] = useState('12345');

    const dispatch = useAppDispatch();

    const loginState = useAppSelector(state => state.login);

    useEffect(() => {
        console.log('\n')
        console.log("Date change: ", loginState?.screen?.loading)
        console.log("Return Data: ", loginState.data.employees);
        console.log('\n')
    }, [loginState.data.employees]);

    const onSubmit = () => {
        if (!mailID) {
            Alert.alert('Invalid', 'Enter User Name:');
            return;
        }
        if (!password) {
            Alert.alert('Invalid', 'Enter Password:');
            return;
        }
        dispatch(getEmployees());
        navigation.replace("Dashboard");
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.content}>Welcome Back!</Text>
            <Text style={{ color: '#fff', fontSize: 18, letterSpacing: 1.5, marginBottom: 15, marginTop: 10 }}>Login to continue</Text>
            <TextInput placeholder='Mail ID' placeholderTextColor="#fff" style={styles.input} onChangeText={(mailID) => { setmailID(mailID) }}></TextInput>
            <TextInput placeholder='Password' placeholderTextColor="#fff" style={styles.input} onChangeText={(password) => { setpassword(password) }}></TextInput>
            <Pressable onPress={() => { Alert.alert('forgot Password') }}>
                <Text style={{ color: '#000', fontSize: 18, textDecorationLine: 'underline', marginBottom: 25, marginTop: 10 }}>Forgot Password?</Text>
            </Pressable>
            <TouchableOpacity style={styles.button} onPress={onSubmit}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
            <Pressable onPress={() => { navigation.navigate('RegisterScreen') }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', marginBottom: 25, marginTop: 220 }}>CREATE ACCOUNT</Text>
            </Pressable>
        </View>
    );
}

export default Login;
