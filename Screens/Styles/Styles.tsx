import { StyleSheet } from "react-native";

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
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#D2A526',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 6,
        padding:5,
        borderColor: 'white',
        borderRadius:35,
        position:'relative',
    },
    button: {
        backgroundColor: '#25242C',
        padding: 10,
        height:60,
        width: 350,
        borderRadius: 35,
        marginBottom: 20,
        top: 20,
       
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input:{
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingVertical: 5,
        color:'#fff',
        margin:15,
        width:'80%',
        paddingBottom:15,
        fontSize: 22,
       
    },
    content:{
        fontSize:32,
        color:'#fff',
        marginTop:150,
        fontWeight:'600',
        letterSpacing:2
    },
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
        marginLeft: 10,
        marginRight: 10,
        marginTop: 80,
        marginBottom: 25,

    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    loginlink: {
        color: '#D2A526',
        textDecorationLine: 'underline',
        paddingTop: 90,
        paddingLeft: 120,
        fontSize: 18

    },
    headstyle: {
        paddingBottom: 40,
        paddingLeft: 50,
        color: '#ffffff',
        paddingTop: 100,
        fontWeight: 'normal',
        fontSize: 25
    },
    viewbackground: {
        color: '#ffffff',
        backgroundColor: 'black',
        paddingBottom: 200,
        padding: 40

    },
    inputstyle: {
        color: '#ffffff',
        padding: 10,
        paddingLeft: 50,
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
        fontSize: 15,
        color: '#ffffff'
    },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white',
      },
      centeredText: {
        fontSize: 15,
        marginBottom: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
      },
      textInputContainer: {
        borderWidth: 1,
        borderColor: '#D2A526',
        borderRadius: 10,
        marginBottom: 16,
        width: '80%',
    
      },
      textVerifyInput: {
        padding: 8,
        color: 'white',
      },
      logo: {
        width: 50,
        height: 50,
        marginBottom: 16,
      },
      underlineText: {
        textDecorationLine: 'underline',
      },
});

export { styles };