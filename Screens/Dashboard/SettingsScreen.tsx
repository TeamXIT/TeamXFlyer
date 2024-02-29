import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RegistrationScreen = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('Contacts') }} style={styles.btn}>
                <Text style={styles.btnTxt}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('profile') }} style={styles.btn}>
                <Text style={styles.btnTxt}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('FlatList')} }style={styles.btn}>
            <Text style={styles.btnTxt}>FlatList</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('SectionList')} }style={styles.btn}>
            <Text style={styles.btnTxt}>SectionList</Text>
            </TouchableOpacity>
        </View>
    )
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#D2A526',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
        height: 50,
        width: 200,
        margin: 5,
        borderRadius: 15
    },
    btnTxt: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    }

})