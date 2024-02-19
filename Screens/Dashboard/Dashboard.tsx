import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import MeetingScreen from "./MeetingScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="meetings" component={MeetingScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
};

export default Dashboard;