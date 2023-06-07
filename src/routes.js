import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from 'expo/vector-icons';

import Home from './pages/Home';
import Busca from './pags/Busca';
import Perfil from './pags/Perfil';
import Pedidos from './pags/Pedidos';
import Carteira from './pags/Carteira';

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator activeColor="#black" inactiveColor="gray">
                <BottomTab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={26} />
                    ),
                }}
                />
                <BottomTab.Screen 
                name="Busca"
                component={Busca}
                options={{
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="search" color={color} size={26} />
                    ),
                }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}