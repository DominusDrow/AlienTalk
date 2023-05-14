import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenLogin from "../screens/ScreenLogin";
import ScreenMainUser from "../screens/ScreenMainUser";

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NoScreenForNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WORK IN PROGRESS</Text>
    </View>
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
        name="StackMain"
        component={ScreenMainUser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

