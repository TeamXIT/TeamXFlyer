import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image,
    Button,



} from "react-native";
import React, { } from 'react';


import { TextInput } from "react-native-gesture-handler";


//import { Image } from "react-native-reanimated/lib/typescript/Animated";
const UpgradeScreen = (props) => {

    function handleSubmitPress(): void {
        props.navigation.navigate('LoginScreen');
    }

    return (
        <View style={styles.viewbackground}>
            <Image source={require('../../images/lightimg.png')} style={{
                width: 20,
                height: 20,
                marginLeft:  270,
                paddingTop:0
            }} ></Image>
            <Image source={require('../../images/nicolaimg.jpg')} style={styles.profilePic}></Image>
            <Text style={styles.headstyle}>Nicolas Adams </Text>
            <Text style={{ alignSelf: 'center' }}>nicolasadams@gmail.com </Text>

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                <Text style={styles.buttonTextStyle}>Upgrade to PRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}
                activeOpacity={0.5}>
                <Image source={require('../../images/privacyimg.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Privacy</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,
                    marginLeft: 150
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}>
                <Image source={require('../../images/history.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Purchase History</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,

                    marginLeft: 90
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}>
                <Image source={require('../../images/help.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Help & Support</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,
                    alignSelf:'flex-end'
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}>
                <Image source={require('../../images/settings.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Settings</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,
                    marginLeft: 140
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}>
                <Image source={require('../../images/inviteFriend.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Invite a Friend</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,

                    marginLeft: 105
                }}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whitebuttonStyle}>
                <Image source={require('../../images/Logoutimg.png')} style={styles.icons}></Image>
                <Text style={styles.textStyle}>Logout</Text>
                <Image source={require('../../images/arrow.png')} style={{
                    width: 20,
                    height: 20,

                    marginLeft: 150
                }}></Image>
            </TouchableOpacity>
        </View>

    );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#D2A526',
        borderWidth: 0,
        color: '#FFFFFF',
        fontSize: 40,
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        verticalAlign: 'middle',
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 25,

    },
    whitebuttonStyle: {
        backgroundColor: '#dddddd',
        borderWidth: 0,
        color: '#FFFFFF',
        fontSize: 40,
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        verticalAlign: 'middle',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        marginBottom: 15
    },

    profilePic: {
        borderRadius: 50,
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    textStyle: {
        paddingLeft: 10,
        color:'#000000',
        fontWeight:'bold'
    },
    icons: {

        width: 20,
        height: 20,
        alignItems: 'flex-start',
        marginLeft: 10
    },
    headstyle: {
        color: '#000000',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: 25
    },
    viewbackground: {
        color: '#000000',
        backgroundColor: 'white',
        paddingBottom: 200,
       
       padding:40

    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,

    },
});