
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import MeetingScreen from "./MeetingScreen";
import SettingsScreen from "./SettingsScreen";
import Contacts from "./Contacts"
import ProfileScreen from "./CoffeeClub";
import CoffeeClub from "./CoffeeClub";


const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="meetings" component={MeetingScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
            <Tab.Screen name="Contacts" component={Contacts} />
            <Tab.Screen name="CoffeeClub" component={CoffeeClub} />
        </Tab.Navigator>
    )
};
export default Dashboard;



