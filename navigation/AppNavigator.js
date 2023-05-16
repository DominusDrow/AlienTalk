import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenLogin from "../screens/ScreenLogin";
import ScreenMainUser from "../screens/ScreenMainUser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


import { Icon } from '@rneui/themed';

function NoScreenForNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WORK IN PROGRESS</Text>
    </View>
  );
}

export const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle:{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: 'rgba(33, 33, 33, 0.5)',
          borderRadius: 20,
          height: 50,
          display: "flex",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          overflow: 'hidden' // agregar esta propiedad para ocultar la línea blanca en la parte superior
        },
        tabBarLabelStyle: {
          color: '#ffffff'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={ScreenMainUser}
        options={{
          tabBarIcon: ({focused}) => <Icon name="home" color={focused ? '#ffffff' : '#ffffff'} size={25} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Space"
        component={NoScreenForNow}
        options={{
          tabBarIcon: ({focused}) => <Icon name="stop" color={focused ? '#ffffff' : '#ffffff'} size={25} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Store"
        component={NoScreenForNow}
        options={{
          tabBarIcon: ({focused}) => <Icon name="store" color={focused ? '#ffffff' : '#ffffff'} size={25} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NoScreenForNow}
        options={{
          tabBarIcon: ({focused}) => <Icon name="person" color={focused ? '#ffffff' : '#ffffff'} size={25} />,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export const StackLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ScreenLogin"}
        component={ScreenLogin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export const StackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackNavigation"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

