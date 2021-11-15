import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";

import Calculator from '../screens/Calculator';
import Todo from '../screens/Todo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Todo"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerShown: false,
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#FFA0A0" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Todo") {
                        iconName = focused ? "list-circle" : "list-circle-outline";
                    } else if (route.name === "Calculator") {
                        iconName = focused
                            ? "calculator"
                            : "calculator-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#FFA0A0",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Todo" component={Todo} />
            <Tab.Screen name="Calculator" component={Calculator} />
        </Tab.Navigator>
    );
}

export default function Container() {
    const theme = useTheme();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MyTab}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
