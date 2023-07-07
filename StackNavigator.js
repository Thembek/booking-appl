import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return(
            <Tab.Navigator>
                <Tab.Screen 
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLebel: 'Home',
                            headerShown: false,
                            tabBarIcon: ({ focused }) => focused
                                ? (<Entypo name="home" size={24} color="#003580" />) 
                                : (<AntDesign name="home" size={24} color="black" />) ,
                        }}
                />
            </Tab.Navigator>
        );
    }
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;