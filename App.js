import { StyleSheet, Text, View } from "react-native";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import ShopNavigator from "./src/navigation/ShopNavigator";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  /* ------- PARA LA FUENTE DE LETRA */
  const [fontsLoaded] = useFonts({
    RobotoBlack: require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    // ---- SI NO CARGA ME RETORNA UN NULO
    return null;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
  <BottomTabNavigator/>
  </NavigationContainer>
  </Provider>
)}
