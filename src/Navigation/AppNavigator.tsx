import Home from "@/app/Home/HomeScreen";
import TarefaScreen from "@/ListadeTarefas/TarefasScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from './Type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="TarefaScreen" component={TarefaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}