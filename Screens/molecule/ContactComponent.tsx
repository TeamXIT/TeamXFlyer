import { View, Image, Text, StyleSheet } from "react-native";

type contactParms = {
    Id: number,
    Image: string,
    Name: string,
    Message: string
}

const ContactComponent = (parms: contactParms) => {

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={parms.Image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.Name}>{parms.Name}</Text>
                    <Text style={styles.message}>{parms.Message}</Text>
                </View>
            </View>
        </View>

    );
};

export default ContactComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',

    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 100,
        borderColor: '#fff',
        letterSpacing: 2,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
    },
    Name: {
        fontSize: 24,
        fontWeight: '700'
    },
    message: {
        fontSize: 18,
        color: 'grey'
    },
});