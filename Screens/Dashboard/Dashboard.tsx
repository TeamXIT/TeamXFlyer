import { useEffect } from "react";
import { StyleSheet, Text , TouchableOpacity} from "react-native";

const Dashboard =( {navigation}) =>{


    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Contacts')} }style={styles.btn}>
        <Text style={styles.btnTxt}>Contacts</Text>
    </TouchableOpacity>
    )
};
export default Dashboard;
const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#D2A526',
        textAlign:'center',
        justifyContent:'center',
        color:'#fff',
        height:50,
        width:200,
        margin:5,
        borderRadius:15    },
    btnTxt:{
       fontSize:24,
       color:'#fff',
       textAlign:'center'
    }

})


