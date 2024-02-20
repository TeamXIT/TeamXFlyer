import { Text, View, TouchableOpacity, TextInput, Alert, Pressable, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useState } from 'react';
import { styles } from '../Styles/Styles';
const Stack = createStackNavigator()
const Login = ({ navigation }) => {
    const [mailID, setmailID] = useState('');
    const [password, setpassword] = useState('');
    const onSubmit = () => {
        if (!mailID) {
            Alert.alert('Invalid', 'Enter User Name:');
            return;
        }
        if (!password) {
            Alert.alert('Invalid', 'Enter Password:');
            return;
        }
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