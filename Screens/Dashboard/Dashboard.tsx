
import { useEffect } from "react";
import { StyleSheet, Text , TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import MeetingScreen from "./MeetingScreen";
import SettingsScreen from "./SettingsScreen";


const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (

        <TouchableOpacity onPress={()=>{navigation.navigate('Contacts')} }style={styles.btn}>
        <Text style={styles.btnTxt}>Contacts</Text>
    </TouchableOpacity>

        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="meetings" component={MeetingScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

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


