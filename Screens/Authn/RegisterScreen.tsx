import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
    ,
} from "react-native";
import React, {  } from 'react';
import { TextInput } from "react-native-gesture-handler";
const RegisterScreen = (props) => {

    function handleSubmitPress(): void {
        props.navigation.navigate('LoginScreen');
    }
    function handleCreateSubmit(): void {
        props.navigation.navigate('UpgradeScreen');
    }

    return (
        <View style={styles.viewbackground}>
            <Text style={styles.headstyle}>Create Account</Text>
              
                <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder=" Mail ID" />
                <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder="Full Name" />
           
                <TextInput style={styles.textInput} placeholderTextColor="#ffffff" placeholder="Password" />
             
           
           
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleCreateSubmit}
            >
                <Text style={styles.buttonTextStyle}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmitPress}>
                <Text style={styles.loginlink}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#D2A526',
        borderWidth: 0,
        color: '#FFFFFF',
        fontSize:40,
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        verticalAlign:'middle',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 80,
        marginBottom: 25,
        
    },
     line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    loginlink:{
        color:'#D2A526',
        textDecorationLine:'underline',
        paddingTop:90,
        paddingLeft:120,
        fontSize:18
        
    },
    headstyle:{
        paddingBottom:40,
        paddingLeft:50,
        color:'#ffffff',
        paddingTop:100,
        fontWeight:'normal',
        fontSize:25
    },
    viewbackground: {
        color: '#ffffff',
        backgroundColor: 'black',
        paddingBottom:200,
        padding:40
       
    },
    inputstyle: {
        color: '#ffffff',
        padding:10,
        paddingLeft:50,
        borderBottomColor: '#dddddd',
        borderBottomWidth: .5,
        marginVertical: 5,
   },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    
    },
    textInput: {
        height: 40,
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 40,
        fontSize:15,
        color:'#ffffff'
    },
});