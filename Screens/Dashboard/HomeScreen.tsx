import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../Helper/Reducers/hooks";
import { useEffect } from "react";

const HomeScreen = ({ navigation }) => {

    const loginState = useAppSelector(state => state.login);

    useEffect(() => {
        console.log('\n')
        console.log("Home Page Value Data: ", loginState.data.employees);
        console.log('\n')
    }, [loginState.data.employees]);

    const handleOnPress = () => {
        console.log("On pressed");
        navigation.navigate("ContactDetails");
    };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Pressable onPress={handleOnPress}>
                <Text>Press to navigate to Contact Detail Page</Text>
            </Pressable>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});