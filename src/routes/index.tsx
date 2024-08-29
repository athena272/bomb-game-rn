import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Start from "../pages/Start";
import Rules from "../pages/Rules";
import PlayAlone from "../pages/PlayAlone";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="Rules" component={Rules} />
                <Stack.Screen name="PlayAlone" component={PlayAlone} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}