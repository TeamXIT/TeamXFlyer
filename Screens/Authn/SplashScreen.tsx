import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { styles } from "../Styles/Styles";


const SplashScreen = ({ navigation }) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        
        //AsyncStorage.removeItem('userid');
        //AsyncStorage.setItem('userid', "tirumal");
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