import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { CheckoutNavigator } from "./checkout.navigator";
import { HomeNavigator } from "./home.navigator";
import { CartContextProvider } from "../../services/cart/cart.context";
import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Hjem: "md-home",
  Map: "md-map",
  Checkout: "md-cart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
    <CartContextProvider>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: colors.brand.primary,
          inactiveTintColor: colors.brand.muted,
        }}
      >
        <Tab.Screen name="Hjem" component={HomeNavigator} />
        <Tab.Screen name="Checkout" component={CheckoutNavigator} />
      </Tab.Navigator>
    </CartContextProvider>
);
