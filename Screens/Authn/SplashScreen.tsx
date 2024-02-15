import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Image, View } from "react-native";

const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        console.log("UseEffectCalling");
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        AsyncStorage.getItem('userid').then((value) =>
            navigation.replace(
                value === null ? 'Authn' : 'Dashboard'
            ),
        );
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../images/OIP.jpg')}
                style={styles.image} />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator} />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#307ECC"
    },
    image: {
        width: '90%',
        resizeMode: "contain",
        margin: 30
    },
    activityIndicator: {
        alignItems: "center",
        height: 100
    }
})