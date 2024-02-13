import { TouchableOpacity, 
    Text, 
    StyleSheet, 
    GestureResponderEvent, 
    Alert, 
    View 
} from "react-native";

const LoginScreen = ({navigation}) => {

    function handleSubmitPress(event: GestureResponderEvent): void {
        Alert.alert('Navigation', 'Login button clicked');
    }

    function handleNavigationPress(event: GestureResponderEvent): void {
        navigation.navigate('RegisterScreen')
    }

    return (
        <View>
            <Text>Welcome to Login</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
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