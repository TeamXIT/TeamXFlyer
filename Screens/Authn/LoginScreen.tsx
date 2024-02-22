import { Text, View, TouchableOpacity, TextInput, Alert, Pressable, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useState } from 'react';
import { styles } from '../Styles/Styles';
const Stack = createStackNavigator();

const Login = ({ navigation }) => {
    const [mailID, setmailID] = useState('netus.et.malesuada@ornarelectusjusto.co.uk');
    const [password, setpassword] = useState('12345');

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
       //userLogin(mailID, password);

    }
    const endPoint = 'https://reactnative.dev/movies.json';
    const getUsers = async () => {
        // Example endpoint
        let result = await fetch(endPoint);
        fetch(endPoint).then((result) => {
            var responce = result;
            fetch(endPoint).then((res) => {

            })
        });
    }

    const userLogin = (userName: string, password: string) => {
     fetch(endPoint, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        }, ).then((resp) => {
            //TODO Validation
        });
    }

    const getUserDetail = async (userId: number) => {
        fetch('https://teamx.in/api/user/search', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId
            })
        }).then((responce) => {
            console.log("API Responce: ", responce);
        })
    }

    const getMoviesFromApi = () => {
        console.log("API Start");
        return fetch(endPoint)
            .then(response => response.json())
            .then(json => {
                console.log("API return Movies: ", json.movies);
                navigation.replace("Dashboard");
            })
            .catch(error => {
                console.error(error);
            });
    };

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