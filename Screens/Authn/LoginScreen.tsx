import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Pressable, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useEffect, useState } from 'react';
const Stack = createStackNavigator()
export default function Login({ navigation }) {
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
       userLogin(mailID, password);
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
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2A526',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 6,
        padding: 5,
        borderColor: 'white',
        borderRadius: 35,
        position: 'relative',


    },
    button: {
        backgroundColor: '#25242C',
        padding: 10,
        height: 60,
        width: 350,
        borderRadius: 35,
        marginBottom: 20,
        top: 20,

    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingVertical: 5,
        color: '#fff',
        margin: 15,
        width: '80%',
        paddingBottom: 15,
        fontSize: 22,

    },
    content: {
        fontSize: 32,
        color: '#fff',
        marginTop: 150,
        fontWeight: '600',
        letterSpacing: 2
    }
});