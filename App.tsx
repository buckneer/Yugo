

import React, { PropsWithChildren, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { StyleSheet } from "react-native";
import ConnectionsScreen from "./screens/ConnectionsScreen";

const Stack = createNativeStackNavigator();

const App = () => {



    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeScreen"}>
                <Stack.Screen
                    name={"HomeScreen"}
                    component={HomeScreen}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen
                    name={"Connection"}
                    component={ConnectionsScreen}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;

