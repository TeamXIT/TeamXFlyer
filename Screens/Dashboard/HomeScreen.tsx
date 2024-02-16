import { Pressable, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {

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