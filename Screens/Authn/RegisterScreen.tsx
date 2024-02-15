import { Text, View, TouchableOpacity, GestureResponderEvent, StyleSheet } from "react-native";

const RegisterScreen = (props) => {

    function handleSubmitPress(): void {
        props.navigation.navigate('VerificationScreen');
    }

    return (
        <View>
            <Text>Registration</Text>

            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
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